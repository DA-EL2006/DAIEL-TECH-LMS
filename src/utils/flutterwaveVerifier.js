/**
 * Flutterwave Backend / Server-Side Verification Helper
 * Uses flutterwave-node-v3 or direct HTTPS fetch to verify transaction status with FLW_SECRET_KEY
 */

const Flutterwave = require('flutterwave-node-v3');

const FLW_PUBLIC_KEY = process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY || "FLWPUBK_TEST-0b811b687e7a828a5e3471cb1985e4ac";
const FLW_SECRET_KEY = process.env.REACT_APP_FLUTTERWAVE_SECRET_KEY || "";

const flw = new Flutterwave(FLW_PUBLIC_KEY, FLW_SECRET_KEY);

/**
 * Verifies a transaction with Flutterwave API
 * @param {string|number} transactionId - The transaction ID returned by Flutterwave inline popup
 * @param {number} expectedAmount - Price of course (e.g. 5000)
 * @param {string} expectedCurrency - Currency (default 'NGN')
 * @returns {Promise<{success: boolean, data?: object, error?: string}>}
 */
export const verifyFlutterwaveTransaction = async (
  transactionId,
  expectedAmount = 5000,
  expectedCurrency = 'NGN'
) => {
  try {
    const response = await flw.Transaction.verify({ id: transactionId });

    if (
      response &&
      response.status === 'success' &&
      response.data &&
      response.data.status === 'successful' &&
      Number(response.data.amount) >= Number(expectedAmount) &&
      response.data.currency === expectedCurrency
    ) {
      return {
        success: true,
        data: response.data,
      };
    } else {
      return {
        success: false,
        error: response?.message || 'Transaction verification failed or amount mismatch.',
        data: response?.data,
      };
    }
  } catch (error) {
    console.error('Flutterwave transaction verification error:', error);
    return {
      success: false,
      error: error.message || 'Error communicating with Flutterwave server.',
    };
  }
};

/**
 * Supabase Edge Function / Node Handler Template for Webhooks & Verification
 */
export const SUPABASE_EDGE_FUNCTION_TEMPLATE = `
// Supabase Edge Function: verify-flutterwave
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const FLW_SECRET_KEY = Deno.env.get("FLW_SECRET_KEY") || "YOUR_FLW_SECRET_KEY";

serve(async (req) => {
  try {
    const { transaction_id, course_id, expected_amount = 5000 } = await req.json();

    const response = await fetch(\`https://api.flutterwave.com/v3/transactions/\${transaction_id}/verify\`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: \`Bearer \${FLW_SECRET_KEY}\`,
      },
    });

    const resData = await response.json();

    if (
      resData.status === "success" &&
      resData.data.status === "successful" &&
      resData.data.amount >= expected_amount &&
      resData.data.currency === "NGN"
    ) {
      return new Response(JSON.stringify({ verified: true, data: resData.data }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
      });
    }

    return new Response(JSON.stringify({ verified: false, error: "Invalid payment status or amount mismatch" }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
});
`;
