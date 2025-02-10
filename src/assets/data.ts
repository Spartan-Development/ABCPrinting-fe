interface data {
  title: string;
  icon: string;
  subtitle: string;
  method: "POST" | "GET" | "PUT";
  url: string;
  headers: { key: string; type: string; desc: string; isRequired: boolean }[];
  req: any;
}

export const source: data[] = [
  {
    title: "Autenticacion",
    icon: "key",
    subtitle: "",
    method: "POST",
    url: "http://localhost:9000/login",
    headers: [
      {
        key: "Content-Type",
        type: "string",
        desc: "",
        isRequired: true,
      },
    ],
    req: {
      usuario: "&/4a9#4a9{2",
      clave: ")^4a9b=20fd(4a",
    },
  },
];
