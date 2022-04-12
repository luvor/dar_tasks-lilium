import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="pa-10 py-20 lili text-black">
      <div className="bg-white/80 mx-auto max-w-fit rounded-xl pa-4">
        <p>Я лилий нарвала прекрасных и душистых,</p>
        <p>Стыдливо-замкнутых, как дев невинных рой,</p>
        <p>С их лепестков, дрожащих и росистых,</p>
        <p>Пила я аромат и счастье и покой.</p>
        <br />
        <p>И сердце трепетно сжималось, как от боли,</p>
        <p>А бледные цветы качали головой,</p>
        <p>И вновь мечтала я о той далекой воле,</p>
        <p>О той стране, где я была с тобой…</p>
      </div>
    </div>
  );
}

export default Footer;
