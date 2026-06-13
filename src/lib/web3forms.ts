// Sends form submissions to your email via Web3Forms (https://web3forms.com).
// Works on a static site — no server needed. The access key is public-safe:
// it only routes submissions to the email that created the key.
//
// Set NEXT_PUBLIC_WEB3FORMS_KEY in your .env (and in your host's env vars).

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const ENDPOINT = "https://api.web3forms.com/submit";

export type Web3FormsPayload = Record<string, string | undefined> & {
  /** Honeypot — leave empty; bots that fill it are rejected. */
  botcheck?: string;
};

export async function sendViaWeb3Forms(payload: Web3FormsPayload): Promise<void> {
  if (!ACCESS_KEY) {
    throw new Error(
      "Contact form is not configured (missing NEXT_PUBLIC_WEB3FORMS_KEY)."
    );
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ access_key: ACCESS_KEY, ...payload }),
  });

  const data: { success: boolean; message?: string } = await res.json();
  if (!data.success) {
    throw new Error(data.message || "Submission failed.");
  }
}
