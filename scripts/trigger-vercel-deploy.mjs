const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;

if (!deployHookUrl) {
  console.log(
    "Vercel deploy skipped: set VERCEL_DEPLOY_HOOK_URL to enable the post-push deploy hook.",
  );
  process.exit(0);
}

let url;
try {
  url = new URL(deployHookUrl);
} catch {
  console.error("Vercel deploy skipped: VERCEL_DEPLOY_HOOK_URL is not a valid URL.");
  process.exit(1);
}

if (url.protocol !== "https:") {
  console.error("Vercel deploy skipped: the deploy hook URL must use HTTPS.");
  process.exit(1);
}

const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 15_000);

try {
  const response = await fetch(url, {
    method: "POST",
    signal: controller.signal,
  });

  if (!response.ok) {
    throw new Error(`Vercel returned ${response.status} ${response.statusText}`);
  }

  console.log("Vercel deployment triggered successfully.");
} catch (error) {
  console.error(`Could not trigger Vercel deployment: ${error.message}`);
  process.exitCode = 1;
} finally {
  clearTimeout(timeout);
}
