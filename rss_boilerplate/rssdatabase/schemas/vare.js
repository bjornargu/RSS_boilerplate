export default {
  title: "Vare",
  name: "vare",
  type: "document",
  fields: [
    {
      title: "Varenavn",
      name: "varenavn",
      type: "string",
    },
    {
      title: "Mengde/antall",
      name: "mengde",
      type: "string",
    },
    {
      title: "Kategori",
      name: "kategori",
      type: "reference",
      to: { type: "kategori" },
    },
  ],
};
