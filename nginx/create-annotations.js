// generate JSON schema from NGINX ingress annotations on the website

/*
    Using your browser, head to https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/
    Execute the snippet below in the browser console to get the latest result
*/

const properties = Array.from(
  // grab table
  document
    .querySelector(".md-content .md-typeset__table")
    // grab rows
    .querySelectorAll("tr")
)
  // extract values we're interested in
  .map((node) => ({
    annotation: node.querySelector("a") && node.querySelector("a").innerText,
    id:
      node.querySelector("a") &&
      node
        .querySelector("a")
        .href.substring(node.querySelector("a").href.indexOf("#") + 1),
    type:
      node.querySelector("td:last-child") &&
      node.querySelector("td:last-child").innerText,
  }))
  .filter(({ annotation }) => !!annotation)
  // convert each row to a key in our JSON schema
  .reduce(
    (results, { annotation, id, type }) => ({
      ...results,
      [annotation]: {
        type: type === "number" ? "number" : "string",
        title: annotation,
        description: `type: ${type}. see https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#${id}`,
        markdownDescription: `type: ${type}. see [${id} documentation](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#${id})`,
      },
    }),
    {}
  );

const schema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  title: "List of NGINX ingress annotations.",
  markdownDescription:
    "Nginx annotations lets you customize a bunch of things on your ingress, for example:\n\n- rate-limiting\n- http headers\n- redirections\n- authentication\n- ...\n\n👉 See [Nginx annotations documentation](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations)",
  properties,
};

copy(JSON.stringify(schema, null, 2));
