import { NextApiRequest, NextApiResponse } from "next";
import { linkResolver } from "../../prismicConfiguration";
import Client from "../../prismicHelpers";

export default async (req: any, res: any) => {
  const { token, documentId } = req.query;
  const redirectUrl = await Client(req)
    .getPreviewResolver(token as string, documentId as string)
    .resolve(linkResolver, "/");

  if (!redirectUrl) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({ token });

  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
    <script>window.location.href = '${redirectUrl}'</script>
    </head>`
  );
  res.end();
};
