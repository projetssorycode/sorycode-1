const stage = process.env.SST_STAGE || "dev";
const page = process.env.GITHUB_REPOSITORY === "projetssorycode/sorycode-1" || process.env.SORYCODE_WEB_TARGET === "pages";
const host = "https://projetssorycode.github.io/sorycode-1";
const url =
  process.env.SORYCODE_WEB_URL ||
  (page ? host : stage === "production" ? host : `https://${stage}.sorycode.ai`);
process.env.SORYCODE_WEB_BASE || (page ? "/sorycode-1" : "/docs");

const config = {
  url,
  console: `${url}/auth`,
  email: "contact@projetssorycode.dev",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/projetssorycode/sorycode-1",
  headerLinks: [
    { name: "app.header.home", url: "/" },
    { name: "app.header.docs", url: "/" },
  ],
};

export { config as c };
