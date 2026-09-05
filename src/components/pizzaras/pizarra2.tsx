import React from "react";

export const Pizarron1 = () => {
  const instruments = [
    { icon: "📏", name: "Regla graduada" },
    { icon: "📐", name: "Vernier" },
    { icon: "🧵", name: "Cinta métrica" },
  ];

  const flow = ["Medición", "Precisión", "Cifras significativas"];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 900,
      margin: "0 auto",
      padding: "18px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 16px",
      paddingBottom: 10,
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(24px, 4vw, 36px)",
      borderBottom: "3px solid rgba(255,255,255,.75)",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 18,
    },
    heading: {
      margin: "0 0 12px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: 21,
    },
    instruments: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 8,
    },
    instrument: {
      minWidth: 0,
      padding: "12px 6px",
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.75)",
      borderRadius: 8,
    },
    icon: {
      fontFamily: "sans-serif",
      fontSize: "clamp(26px, 5vw, 40px)",
    },
    instrumentName: {
      marginTop: 6,
      fontSize: "clamp(11px, 1.7vw, 14px)",
      overflowWrap: "anywhere",
    },
    definition: {
      padding: 16,
      fontSize: "clamp(15px, 2vw, 18px)",
      lineHeight: 1.5,
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    flow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 20,
      paddingTop: 16,
      borderTop: "3px solid rgba(255,255,255,.75)",
    },
    node: {
      minWidth: 120,
      padding: "9px 12px",
      textAlign: "center",
      border: "2px solid #f8fafc",
      borderRadius: 8,
      fontSize: "clamp(14px, 2vw, 17px)",
    },
    arrow: {
      color: "#fde68a",
      fontSize: 25,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>CIFRAS SIGNIFICATIVAS</h1>

      <div style={styles.layout}>
        <div>
          <h2 style={styles.heading}>Instrumentos de medición</h2>

          <div style={styles.instruments}>
            {instruments.map((instrument) => (
              <div key={instrument.name} style={styles.instrument}>
                <div style={styles.icon}>{instrument.icon}</div>
                <div style={styles.instrumentName}>{instrument.name}</div>
              </div>
            ))}
          </div>

          <h3 style={styles.heading}>Medición</h3>
        </div>

        <div>
          <h2 style={styles.heading}>Definición</h2>

          <div style={styles.definition}>
            <strong  style={{ color: "#fde68a" }}>Cifras significativas =</strong>
            <br />
            Todos los dígitos conocidos con certeza más un último dígito
            estimado.
          </div>
        </div>
      </div>

      <div style={styles.flow}>
        {flow.map((step, index) => (
          <div key={step} style={{ display: "contents" }}>
            <div style={styles.node}>{step}</div>
            {index < flow.length - 1 && (
              <div style={styles.arrow}>→</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export const Pizarron2 = () => {
  const instruments = [
    ["Regla", "±1 mm"],
    ["Vernier", "±0.02 mm"],
    ["Micrómetro", "±0.001 mm"],
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 900,
      margin: "0 auto",
      padding: "18px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 18px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
      gap: 20,
      alignItems: "center",
    },
    rulerCard: {
      padding: 16,
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    piece: {
      width: "72%",
      height: 35,
      margin: "0 auto 22px",
      background: "rgba(253,230,138,.18)",
      border: "3px solid #fde68a",
      borderRadius: 4,
    },
    ruler: {
      position: "relative",
      height: 60,
      borderTop: "4px solid #f8fafc",
      background:
        "repeating-linear-gradient(to right, transparent 0 9%, #f8fafc 9% 9.5%, transparent 9.5% 10%)",
    },
    measurement: {
      marginTop: 12,
      textAlign: "center",
      color: "#fde68a",
      fontFamily: "monospace",
      fontSize: "clamp(20px, 3vw, 27px)",
    },
    estimated: {
      marginTop: 8,
      textAlign: "center",
      fontSize: 15,
    },
    table: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      borderTop: "2px solid #f8fafc",
      borderLeft: "2px solid #f8fafc",
    },
    cell: {
      padding: 10,
      textAlign: "center",
      fontSize: "clamp(14px, 2vw, 17px)",
      borderRight: "2px solid #f8fafc",
      borderBottom: "2px solid #f8fafc",
    },
    header: {
      color: "#fde68a",
      fontWeight: 700,
    },
    bottom: {
      marginTop: 20,
      padding: 14,
      textAlign: "center",
      fontSize: "clamp(17px, 2.5vw, 22px)",
      border: "3px solid #fde68a",
      borderRadius: 9,
    },
    arrow: {
      display: "block",
      color: "#fde68a",
      fontSize: 26,
      lineHeight: 1.2,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>MEDICIÓN, PRECISIÓN E INCERTIDUMBRE</h1>

      <div style={styles.layout}>
        <div style={styles.rulerCard}>
          <div style={styles.piece} />

          <div style={styles.ruler} />

          <div style={styles.measurement}>12.5 cm</div>

          <div style={styles.estimated}>
            ↑
            <br />
            Último dígito estimado
          </div>
        </div>

        <div style={styles.table}>
          <div style={{ ...styles.cell, ...styles.header }}>Instrumento</div>
          <div style={{ ...styles.cell, ...styles.header }}>Precisión</div>

          {instruments.map(([instrument, precision]) => (
            <div key={instrument} style={{ display: "contents" }}>
              <div style={styles.cell}>{instrument}</div>
              <div style={styles.cell}>{precision}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.bottom}>
        Medición
        <span style={styles.arrow}>↓</span>
        Siempre existe incertidumbre
      </div>
    </section>
  );
};

export const Pizarron3 = () => {
  const applications = [
    ["🧪", "Laboratorio"],
    ["📐", "Diseño"],
    ["🏭", "Manufactura"],
    ["💻", "Simulación"],
    ["✅", "Control de calidad"],
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 900,
      margin: "0 auto",
      padding: "18px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 16px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    center: {
      width: "min(230px, 75%)",
      margin: "0 auto",
      padding: "17px 15px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(20px, 3vw, 27px)",
      border: "3px solid #f8fafc",
      borderRadius: "50%",
    },
    stem: {
      width: 3,
      height: 22,
      margin: "0 auto",
      background: "#f8fafc",
    },
    applications: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(125px, 1fr))",
      gap: 10,
      paddingTop: 15,
      borderTop: "3px solid rgba(255,255,255,.75)",
    },
    card: {
      minWidth: 0,
      padding: 11,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 8,
    },
    icon: {
      fontFamily: "sans-serif",
      fontSize: "clamp(25px, 4vw, 34px)",
    },
    label: {
      marginTop: 7,
      fontSize: "clamp(13px, 1.8vw, 16px)",
    },
    example: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 12,
      marginTop: 20,
    },
    value: {
      minWidth: 0,
      padding: 13,
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: "clamp(16px, 2.5vw, 22px)",
      border: "2px solid #f8fafc",
      borderRadius: 8,
      overflowWrap: "anywhere",
    },
    wrong: {
      textDecoration: "line-through",
      textDecorationThickness: 3,
      color: "#fca5a5",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>IMPORTANCIA DE LAS CIFRAS SIGNIFICATIVAS</h1>

      <div style={styles.center}>CIFRAS SIGNIFICATIVAS</div>
      <div style={styles.stem} />

      <div style={styles.applications}>
        {applications.map(([icon, label]) => (
          <div key={label} style={styles.card}>
            <div style={styles.icon}>{icon}</div>
            <div style={styles.label}>{label}</div>
          </div>
        ))}
      </div>

      <div style={styles.example}>
        <div style={styles.value}>Longitud medida: 25.4 cm</div>
        <div style={{ ...styles.value, ...styles.wrong }}>
          25.400000 cm
        </div>
      </div>
    </section>
  );
};

export const Pizarron4 = () => {
  const rules = [
    ["Dígitos ≠ 0", "Sí"],
    ["Ceros entre números", "Sí"],
    ["Ceros a la izquierda", "No"],
    ["Ceros finales decimales", "Sí"],
    ["Ceros finales enteros", "Depende"],
  ];

  const examples = [
    "245 → 3",
    "1005 → 4",
    "0.0045 → 2",
    "3.500 → 4",
    "1500 → ?",
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 900,
      margin: "0 auto",
      padding: "18px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 18px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 2fr) minmax(180px, .8fr)",
      gap: 16,
    },
    table: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.6fr) minmax(90px, .6fr)",
      borderTop: "2px solid #f8fafc",
      borderLeft: "2px solid #f8fafc",
    },
    cell: {
      minWidth: 0,
      padding: "9px 10px",
      textAlign: "center",
      fontSize: "clamp(13px, 1.9vw, 16px)",
      borderRight: "2px solid #f8fafc",
      borderBottom: "2px solid #f8fafc",
      overflowWrap: "anywhere",
    },
    header: {
      color: "#fde68a",
      fontWeight: 700,
    },
    side: {
      display: "grid",
      gap: 9,
    },
    sideTitle: {
      margin: 0,
      color: "#fde68a",
      textAlign: "center",
      fontSize: 20,
    },
    example: {
      padding: 9,
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: "clamp(14px, 2vw, 18px)",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 7,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>REGLAS GENERALES</h1>

      <div style={styles.layout}>
        <div style={styles.table}>
          <div style={{ ...styles.cell, ...styles.header }}>Regla</div>
          <div style={{ ...styles.cell, ...styles.header }}>¿Cuenta?</div>

          {rules.map(([rule, answer]) => (
            <div key={rule} style={{ display: "contents" }}>
              <div style={styles.cell}>{rule}</div>
              <div style={styles.cell}>{answer}</div>
            </div>
          ))}
        </div>

        <div style={styles.side}>
          <h2 style={styles.sideTitle}>Ejemplos rápidos</h2>

          {examples.map((example) => (
            <div key={example} style={styles.example}>
              {example}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Pizarron5 = () => {
  const examples = [
    {
      value: "45.8",
      marks: [
        ["4", true],
        ["5", true],
        [".", null],
        ["8", true],
      ],
      result: "✔ ✔ ✔",
    },
    {
      value: "1005",
      marks: [
        ["1", true],
        ["0", true],
        ["0", true],
        ["5", true],
      ],
      result: "✔ ✔ ✔ ✔",
    },
    {
      value: "0.00350",
      marks: [
        ["0", false],
        [".", null],
        ["0", false],
        ["0", false],
        ["3", true],
        ["5", true],
        ["0", true],
      ],
      result: "✘ ✘ ✘ ✔ ✔ ✔",
    },
    {
      value: "2.500",
      marks: [
        ["2", true],
        [".", null],
        ["5", true],
        ["0", true],
        ["0", true],
      ],
      result: "✔ ✔ ✔ ✔",
    },
    {
      value: "2500",
      marks: [
        ["2", true],
        ["5", true],
        ["0", "unknown"],
        ["0", "unknown"],
      ],
      result: "✔ ✔ ? ?",
    },
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 900,
      margin: "0 auto",
      padding: "18px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 18px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
      gap: 12,
    },
    card: {
      minWidth: 0,
      padding: "15px 8px",
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 9,
    },
    number: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      fontFamily: "monospace",
      fontSize: "clamp(24px, 4vw, 34px)",
    },
    significant: {
      color: "#fde68a",
      textDecoration: "underline",
      textUnderlineOffset: 5,
    },
    notSignificant: {
      color: "#fca5a5",
      textDecoration: "line-through",
    },
    unknown: {
      color: "#bfdbfe",
      textDecoration: "underline dotted",
      textUnderlineOffset: 5,
    },
    result: {
      marginTop: 12,
      fontSize: "clamp(13px, 1.7vw, 16px)",
      letterSpacing: 1,
    },
  };

  const getMarkStyle = (state) => {
    if (state === true) return styles.significant;
    if (state === false) return styles.notSignificant;
    if (state === "unknown") return styles.unknown;
    return {};
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>CLASIFICACIÓN DE LOS CEROS</h1>

      <div style={styles.grid}>
        {examples.map((example) => (
          <div key={example.value} style={styles.card}>
            <div style={styles.number}>
              {example.marks.map(([digit, state], index) => (
                <span key={`${digit}-${index}`} style={getMarkStyle(state)}>
                  {digit}
                </span>
              ))}
            </div>

            <div style={styles.result}>{example.result}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Pizarron6 = () => {
  const examples = [
    {
      number: "2500",
      scientific: "2.5 × 10³",
      figures: "2 cifras",
    },
    {
      number: "2500",
      scientific: "2.500 × 10³",
      figures: "4 cifras",
    },
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 860,
      margin: "0 auto",
      padding: "18px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 18px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    headers: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 10,
      marginBottom: 10,
    },
    header: {
      padding: 9,
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(14px, 2vw, 18px)",
      borderBottom: "2px solid #f8fafc",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 10,
      marginBottom: 12,
    },
    cell: {
      minWidth: 0,
      padding: "15px 8px",
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: "clamp(15px, 2.5vw, 21px)",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 8,
      overflowWrap: "anywhere",
    },
    arrow: {
      textAlign: "center",
      color: "#fde68a",
      fontSize: 25,
    },
    note: {
      margin: "18px 0 0",
      padding: 13,
      textAlign: "center",
      fontSize: "clamp(15px, 2vw, 18px)",
      border: "3px solid #fde68a",
      borderRadius: 8,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>NOTACIÓN CIENTÍFICA</h1>

      <div style={styles.headers}>
        <div style={styles.header}>Número</div>
        <div style={styles.header}>Notación científica</div>
        <div style={styles.header}>Número de cifras</div>
      </div>

      {examples.map((example, index) => (
        <div key={index}>
          <div style={styles.row}>
            <div style={styles.cell}>{example.number}</div>
            <div style={styles.cell}>{example.scientific}</div>
            <div style={styles.cell}>{example.figures}</div>
          </div>
        </div>
      ))}

      <p style={styles.note}>
        La notación científica elimina la ambigüedad de los ceros finales.
      </p>
    </section>
  );
};

export const Pizarron7 = () => {
  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 760,
      margin: "0 auto",
      padding: "18px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 18px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    operation: {
      maxWidth: 300,
      margin: "0 auto",
      padding: 18,
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: "clamp(22px, 4vw, 32px)",
      lineHeight: 1.45,
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    final: {
      display: "inline-block",
      padding: "4px 15px",
      color: "#fde68a",
      border: "3px solid #fde68a",
      borderRadius: 8,
    },
    arrow: {
      color: "#fde68a",
      fontSize: 28,
    },
    rule: {
      marginTop: 20,
      padding: 15,
      textAlign: "center",
      fontSize: "clamp(16px, 2.4vw, 20px)",
      lineHeight: 1.5,
      border: "3px solid #fde68a",
      borderRadius: 9,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>SUMA Y RESTA</h1>

      <div style={styles.operation}>
        15.24
        <br />
        + 2.3
        <br />
        ─────
        <br />
        17.54
        <br />
        <span style={styles.arrow}>↓</span>
        <br />
        <span style={styles.final}>17.5</span>
      </div>

      <div style={styles.rule}>
        <strong  style={{ color: "#fde68a" }}>Regla:</strong> conservar el mismo número de decimales que el
        dato menos preciso.
      </div>
    </section>
  );
};

export const Pizarron8 = () => {
  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 760,
      margin: "0 auto",
      padding: "18px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 18px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    operation: {
      maxWidth: 300,
      margin: "0 auto",
      padding: 18,
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: "clamp(22px, 4vw, 32px)",
      lineHeight: 1.45,
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    final: {
      display: "inline-block",
      padding: "4px 15px",
      color: "#fde68a",
      border: "3px solid #fde68a",
      borderRadius: 8,
    },
    arrow: {
      color: "#fde68a",
      fontSize: 28,
    },
    rule: {
      marginTop: 20,
      padding: 15,
      textAlign: "center",
      fontSize: "clamp(16px, 2.4vw, 20px)",
      lineHeight: 1.5,
      border: "3px solid #fde68a",
      borderRadius: 9,
    },
    comparison: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 12,
      marginTop: 15,
    },
    comparisonItem: {
      padding: 10,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.75)",
      borderRadius: 8,
      fontSize: "clamp(13px, 1.9vw, 16px)",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>MULTIPLICACIÓN Y DIVISIÓN</h1>

      <div style={styles.operation}>
        3.25
        <br />
        × 2.1
        <br />
        ─────
        <br />
        6.825
        <br />
        <span style={styles.arrow}>↓</span>
        <br />
        <span style={styles.final}>6.8</span>
      </div>

      <div style={styles.rule}>
        <strong  style={{ color: "#fde68a" }}>Regla:</strong> conservar el mismo número de cifras
        significativas que el dato con menos cifras.
      </div>

      <div style={styles.comparison}>
        <div style={styles.comparisonItem}>Suma → decimales</div>
        <div style={styles.comparisonItem}>
          Multiplicación → cifras significativas
        </div>
      </div>
    </section>
  );
};

export const Pizarron9 = () => {
  const examples = [
    ["8.432", "8.43"],
    ["5.786", "5.79"],
    ["12.649", "12.65"],
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 860,
      margin: "0 auto",
      padding: "18px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 18px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 20,
    },
    decision: {
      display: "grid",
      gap: 10,
      textAlign: "center",
    },
    question: {
      padding: 13,
      color: "#fde68a",
      border: "3px solid #f8fafc",
      borderRadius: 9,
      fontSize: "clamp(16px, 2.4vw, 20px)",
    },
    options: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 10,
    },
    option: {
      minWidth: 0,
      padding: 12,
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 8,
      fontSize: "clamp(14px, 2vw, 17px)",
    },
    arrow: {
      display: "block",
      color: "#fde68a",
      fontSize: 24,
    },
    examples: {
      display: "grid",
      gap: 10,
    },
    example: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      gap: 8,
      alignItems: "center",
      padding: 12,
      fontFamily: "monospace",
      fontSize: "clamp(17px, 2.7vw, 22px)",
      border: "2px solid #f8fafc",
      borderRadius: 8,
    },
    result: {
      color: "#fde68a",
      textAlign: "center",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>REDONDEO</h1>

      <div style={styles.layout}>
        <div style={styles.decision}>
          <div style={styles.question}>¿Primer dígito eliminado?</div>

          <span style={styles.arrow}>↓</span>

          <div style={styles.options}>
            <div style={styles.option}>
              &lt; 5
              <span style={styles.arrow}>↓</span>
              Se queda igual
            </div>

            <div style={styles.option}>
              ≥ 5
              <span style={styles.arrow}>↓</span>
              Aumenta uno
            </div>
          </div>
        </div>

        <div style={styles.examples}>
          {examples.map(([original, rounded]) => (
            <div key={original} style={styles.example}>
              <span>{original}</span>
              <span>→</span>
              <strong style={styles.result}>{rounded}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Pizarron10 = () => {
  const flow = [
    "Medición",
    "Redondeo",
    "Error",
    "Algoritmo",
    "Nuevo error",
    "Resultado final",
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 900,
      margin: "0 auto",
      padding: "18px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 18px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.7fr) minmax(200px, .7fr)",
      gap: 20,
      alignItems: "center",
    },
    flow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 7,
    },
    node: {
      minWidth: 105,
      maxWidth: 140,
      padding: "10px 8px",
      textAlign: "center",
      border: "2px solid #f8fafc",
      borderRadius: 8,
      fontSize: "clamp(13px, 1.8vw, 16px)",
    },
    arrow: {
      color: "#fde68a",
      fontSize: 24,
    },
    warning: {
      padding: 16,
      textAlign: "center",
      fontSize: "clamp(16px, 2.3vw, 20px)",
      lineHeight: 1.5,
      border: "3px solid #fde68a",
      borderRadius: 9,
    },
    warningArrow: {
      display: "block",
      color: "#fde68a",
      fontSize: 28,
    },
    copies: {
      marginTop: 18,
      textAlign: "center",
      fontFamily: "sans-serif",
      fontSize: "clamp(23px, 4vw, 34px)",
      opacity: 0.9,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>
        CIFRAS SIGNIFICATIVAS Y MÉTODOS NUMÉRICOS
      </h1>

      <div style={styles.layout}>
        <div>
          <div style={styles.flow}>
            {flow.map((step, index) => (
              <div key={step} style={{ display: "contents" }}>
                <div style={styles.node}>{step}</div>

                {index < flow.length - 1 && (
                  <div style={styles.arrow}>→</div>
                )}
              </div>
            ))}
          </div>

          <div style={styles.copies}>📄 → 📄 → 📄</div>
        </div>

        <div style={styles.warning}>
          Muchos errores pequeños
          <span style={styles.warningArrow}>↓</span>
          Se pueden acumular
        </div>
      </div>
    </section>
  );
};


export const Pizarron11 = () => {
  const rules = [
    "Dígitos ≠ 0",
    "Ceros internos",
    "Ceros a la izquierda",
    "Ceros finales",
    "Notación científica",
  ];

  const ideas = [
    "La precisión proviene de la medición, no del número de decimales.",
    "No se deben inventar cifras significativas.",
    "Redondear solo al final del cálculo, siempre que sea posible.",
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 980,
      margin: "0 auto",
      padding: "16px clamp(10px, 2vw, 22px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 14px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(22px, 4vw, 34px)",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 2fr) minmax(210px, .8fr)",
      gap: 15,
      alignItems: "start",
    },
    map: {
      display: "grid",
      gap: 8,
    },
    mainNode: {
      maxWidth: 270,
      margin: "0 auto",
      padding: 12,
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(18px, 2.8vw, 24px)",
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    arrow: {
      textAlign: "center",
      color: "#fde68a",
      fontSize: 23,
      lineHeight: 1,
    },
    trio: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 8,
    },
    node: {
      minWidth: 0,
      padding: "9px 6px",
      textAlign: "center",
      fontSize: "clamp(12px, 1.7vw, 15px)",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 7,
      overflowWrap: "anywhere",
    },
    rules: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(95px, 1fr))",
      gap: 7,
    },
    operations: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 8,
    },
    ideas: {
      padding: 13,
      border: "3px solid #fde68a",
      borderRadius: 9,
    },
    ideasTitle: {
      margin: "0 0 10px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: 20,
    },
    list: {
      margin: 0,
      paddingLeft: 20,
      fontSize: "clamp(13px, 1.7vw, 15px)",
      lineHeight: 1.5,
    },
    icon: {
      marginRight: 5,
      fontFamily: "sans-serif",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>MAPA GENERAL DE CIFRAS SIGNIFICATIVAS</h1>

      <div style={styles.layout}>
        <div style={styles.map}>
          <div style={styles.mainNode}>CIFRAS SIGNIFICATIVAS</div>

          <div style={styles.arrow}>↓</div>

          <div style={styles.trio}>
            <div style={styles.node}>
              <span style={styles.icon}>📏</span>
              Medición
            </div>
            <div style={styles.node}>Precisión</div>
            <div style={styles.node}>Incertidumbre</div>
          </div>

          <div style={styles.arrow}>↓</div>

          <div style={styles.mainNode}>Reglas para identificarlas</div>

          <div style={styles.arrow}>↓</div>

          <div style={styles.rules}>
            {rules.map((rule) => (
              <div key={rule} style={styles.node}>
                {rule}
              </div>
            ))}
          </div>

          <div style={styles.arrow}>↓</div>

          <div style={styles.mainNode}>Operaciones</div>

          <div style={styles.arrow}>↓</div>

          <div style={styles.operations}>
            <div style={styles.node}>
              Suma / Resta
              <br />
              <small>Decimales</small>
            </div>

            <div style={styles.node}>
              Multiplicación / División
              <br />
              <small>Cifras significativas</small>
            </div>
          </div>

          <div style={styles.arrow}>↓</div>

          <div style={styles.mainNode}>
            <span style={styles.icon}>≈</span>
            Redondeo
          </div>

          <div style={styles.arrow}>↓</div>

          <div style={styles.mainNode}>
            <span style={styles.icon}>💻</span>
            Métodos numéricos
          </div>

          <div style={styles.arrow}>↓</div>

          <div style={styles.mainNode}>Resultados confiables</div>
        </div>

        <aside style={styles.ideas}>
          <h2 style={styles.ideasTitle}>Ideas clave</h2>

          <ul style={styles.list}>
            {ideas.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};