import React from "react";

export const Pizarron1 = () => {
  const engineeringItems = [
    ["🌉", "Puente"],
    ["⚙️", "Turbina"],
    ["✈️", "Avión"],
  ];

  const flow = [
    "Problemas difíciles",
    "Modelos matemáticos",
    "Métodos numéricos",
    "Solución aproximada",
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
      paddingBottom: 10,
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
      borderBottom: "3px solid rgba(255,255,255,.75)",
    },
    top: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 18,
    },
    examples: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 8,
    },
    example: {
      minWidth: 0,
      padding: 10,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.7)",
      borderRadius: 8,
    },
    icon: {
      fontFamily: "sans-serif",
      fontSize: "clamp(25px, 5vw, 38px)",
    },
    label: {
      marginTop: 5,
      fontSize: "clamp(12px, 2vw, 16px)",
    },
    heading: {
      margin: "0 0 12px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: 21,
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
      alignItems: "stretch",
      flexWrap: "wrap",
      gap: 7,
      marginTop: 20,
      paddingTop: 18,
      borderTop: "3px solid rgba(255,255,255,.7)",
    },
    node: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 120,
      maxWidth: 160,
      padding: "9px 10px",
      textAlign: "center",
      fontSize: "clamp(13px, 1.7vw, 16px)",
      border: "2px solid #f8fafc",
      borderRadius: 7,
    },
    arrow: {
      display: "flex",
      alignItems: "center",
      color: "#fde68a",
      fontSize: 25,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>¿QUÉ SON LOS MÉTODOS NUMÉRICOS?</h1>

      <div style={styles.top}>
        <div>
          <h2 style={styles.heading}>Problemas reales</h2>

          <div style={styles.examples}>
            {engineeringItems.map(([icon, label]) => (
              <div key={label} style={styles.example}>
                <div style={styles.icon}>{icon}</div>
                <div style={styles.label}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={styles.heading}>Definición</h2>
          <div style={styles.definition}>
            <strong  style={{ color: "#fde68a" }}>Métodos numéricos =</strong>
            <br />
            Técnicas matemáticas que permiten obtener soluciones aproximadas
            mediante algoritmos.
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
  const features = [
    ["≈", "Soluciones aproximadas"],
    ["⚙", "Algoritmos"],
    ["123", "Operaciones finitas"],
    ["Δ", "Control del error"],
    ["💻", "Implementación computacional"],
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 900,
      margin: "0 auto",
      padding: "20px clamp(12px, 3vw, 26px)",
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
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    center: {
      width: "min(230px, 75%)",
      margin: "0 auto",
      padding: "18px 15px",
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(20px, 3vw, 27px)",
      border: "3px solid #f8fafc",
      borderRadius: "50%",
    },
    stem: {
      width: 3,
      height: 25,
      margin: "0 auto",
      background: "#f8fafc",
    },
    branches: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
      gap: 12,
      paddingTop: 16,
      borderTop: "3px solid rgba(255,255,255,.7)",
    },
    card: {
      minWidth: 0,
      padding: 12,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 9,
      background: "rgba(255,255,255,.04)",
    },
    icon: {
      minHeight: 38,
      color: "#fde68a",
      fontFamily: "sans-serif",
      fontSize: "clamp(24px, 4vw, 34px)",
    },
    text: {
      marginTop: 7,
      fontSize: "clamp(13px, 1.8vw, 16px)",
      lineHeight: 1.35,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>CARACTERÍSTICAS FUNDAMENTALES</h1>

      <div style={styles.center}>MÉTODOS NUMÉRICOS</div>
      <div style={styles.stem} />

      <div style={styles.branches}>
        {features.map(([icon, text]) => (
          <div key={text} style={styles.card}>
            <div style={styles.icon}>{icon}</div>
            <div style={styles.text}>{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Pizarron3 = () => {
  const branches = [
    ["Civil", "🌉"],
    ["Mecánica", "⚙️"],
    ["Eléctrica", "⚡"],
    ["Química", "🧪"],
    ["Computación", "🖥️"],
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 900,
      margin: "0 auto",
      padding: "20px clamp(12px, 3vw, 26px)",
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
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    center: {
      width: "min(220px, 75%)",
      margin: "0 auto",
      padding: "17px 14px",
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(21px, 3vw, 28px)",
      border: "3px solid #f8fafc",
      borderRadius: "50%",
    },
    connector: {
      width: 3,
      height: 24,
      margin: "0 auto",
      background: "#f8fafc",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(125px, 1fr))",
      gap: 12,
      paddingTop: 16,
      borderTop: "3px solid rgba(255,255,255,.75)",
    },
    card: {
      minWidth: 0,
      padding: 12,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 9,
    },
    name: {
      color: "#fde68a",
      fontSize: "clamp(15px, 2vw, 19px)",
    },
    icon: {
      marginTop: 7,
      fontFamily: "sans-serif",
      fontSize: "clamp(27px, 4vw, 38px)",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>IMPORTANCIA EN INGENIERÍA</h1>

      <div style={styles.center}>
        MÉTODOS
        <br />
        NUMÉRICOS
      </div>

      <div style={styles.connector} />

      <div style={styles.grid}>
        {branches.map(([name, icon]) => (
          <div key={name} style={styles.card}>
            <div style={styles.name}>{name}</div>
            <div style={styles.icon}>{icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Pizarron4 = () => {
  const steps = [
    ["Problema", "🌉"],
    ["Modelo matemático", "📐"],
    ["Método numérico", "≈"],
    ["Algoritmo", "⚙️"],
    ["Programa", "💻"],
    ["Resultados", "📊"],
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 980,
      margin: "0 auto",
      padding: "20px clamp(10px, 2vw, 22px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 24px",
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    flow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      flexWrap: "wrap",
      gap: 7,
    },
    node: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 105,
      maxWidth: 145,
      padding: "12px 8px",
      textAlign: "center",
      fontSize: "clamp(13px, 1.7vw, 16px)",
      border: "2px solid #f8fafc",
      borderRadius: 8,
    },
    icon: {
      marginBottom: 6,
      color: "#fde68a",
      fontFamily: "sans-serif",
      fontSize: 25,
    },
    arrow: {
      display: "flex",
      alignItems: "center",
      color: "#fde68a",
      fontSize: 25,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>MATEMÁTICAS Y COMPUTACIÓN</h1>

      <div style={styles.flow}>
        {steps.map(([label, icon], index) => (
          <div key={label} style={{ display: "contents" }}>
            <div style={styles.node}>
              <div style={styles.icon}>{icon}</div>
              {label}
            </div>

            {index < steps.length - 1 && (
              <div style={styles.arrow}>→</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export const Pizarron5 = () => {
  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 850,
      margin: "0 auto",
      padding: "20px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 20px",
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    columns: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 18,
    },
    card: {
      minWidth: 0,
      padding: 18,
      textAlign: "center",
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    heading: {
      margin: "0 0 12px",
      color: "#fde68a",
      fontSize: "clamp(19px, 3vw, 25px)",
    },
    value: {
      fontFamily: "monospace",
      fontSize: "clamp(18px, 3vw, 27px)",
      overflowWrap: "anywhere",
    },
    numberLine: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 5,
      marginTop: 24,
      paddingTop: 15,
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: "clamp(13px, 2vw, 18px)",
      borderTop: "4px solid #f8fafc",
    },
    pi: {
      color: "#fde68a",
      fontWeight: 700,
    },
    note: {
      margin: "20px 0 0",
      textAlign: "center",
      fontSize: "clamp(15px, 2vw, 18px)",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>SOLUCIÓN EXACTA Y APROXIMADA</h1>

      <div style={styles.columns}>
        <div style={styles.card}>
          <h2 style={styles.heading}>EXACTA</h2>
          <div style={styles.value}>π = 3.14159265...</div>
        </div>

        <div style={styles.card}>
          <h2 style={styles.heading}>APROXIMADA</h2>
          <div style={styles.value}>π ≈ 3.14</div>
        </div>
      </div>

      <div style={styles.numberLine}>
        <span>3.13</span>
        <span>3.14</span>
        <span style={styles.pi}>π</span>
        <span>3.15</span>
      </div>

      <p style={styles.note}>
        Aproximar no significa estar equivocado, sino estar suficientemente
        cerca.
      </p>
    </section>
  );
};


export const Pizarron6 = () => {
  const errors = [
    ["Error absoluto", "|Valor real − Valor aproximado|"],
    ["Error relativo", "Error absoluto / |Valor real|"],
    ["Error porcentual", "Error relativo × 100"],
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 920,
      margin: "0 auto",
      padding: "20px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 20px",
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    formulas: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
      gap: 12,
    },
    formula: {
      minWidth: 0,
      padding: 13,
      textAlign: "center",
      border: "2px solid #f8fafc",
      borderRadius: 8,
    },
    formulaTitle: {
      color: "#fde68a",
      fontSize: 18,
    },
    expression: {
      marginTop: 7,
      fontFamily: "monospace",
      fontSize: "clamp(12px, 1.7vw, 15px)",
      overflowWrap: "anywhere",
    },
    lower: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: 18,
      marginTop: 20,
    },
    card: {
      padding: 15,
      textAlign: "center",
      border: "3px solid rgba(255,255,255,.75)",
      borderRadius: 9,
    },
    heading: {
      margin: "0 0 10px",
      color: "#fde68a",
      fontSize: 21,
    },
    drawing: {
      fontFamily: "monospace",
      fontSize: "clamp(17px, 3vw, 23px)",
      lineHeight: 1.6,
    },
    table: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      borderTop: "2px solid #f8fafc",
      borderLeft: "2px solid #f8fafc",
    },
    cell: {
      padding: 9,
      textAlign: "center",
      borderRight: "2px solid #f8fafc",
      borderBottom: "2px solid #f8fafc",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>ERRORES NUMÉRICOS</h1>

      <div style={styles.formulas}>
        {errors.map(([name, formula]) => (
          <div key={name} style={styles.formula}>
            <div style={styles.formulaTitle}>{name}</div>
            <div style={styles.expression}>{formula}</div>
          </div>
        ))}
      </div>

      <div style={styles.lower}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Redondeo</h2>
          <div style={styles.drawing}>
            π<br />↓<br />
            3.141593
          </div>
        </div>

        <div style={styles.card}>
          <h2 style={styles.heading}>Truncamiento</h2>
          <div style={styles.drawing}>
            1 + x + x²/2! + x³/3! + ...
          </div>
        </div>

        <div style={styles.table}>
          <div style={{ ...styles.cell, color: "#fde68a" }}>Tipo</div>
          <div style={{ ...styles.cell, color: "#fde68a" }}>Origen</div>
          <div style={styles.cell}>Redondeo</div>
          <div style={styles.cell}>Computadora</div>
          <div style={styles.cell}>Truncamiento</div>
          <div style={styles.cell}>Método</div>
        </div>
      </div>
    </section>
  );
};

export const Pizarron7 = () => {
  const targets = [
    {
      name: "Alta precisión y alta exactitud",
      dots: ["48% 48%", "52% 49%", "49% 53%", "53% 52%"],
    },
    {
      name: "Alta precisión, baja exactitud",
      dots: ["24% 26%", "28% 27%", "25% 31%", "30% 30%"],
    },
    {
      name: "Baja precisión, alta exactitud",
      dots: ["28% 48%", "68% 52%", "48% 30%", "52% 70%"],
    },
    {
      name: "Baja precisión y baja exactitud",
      dots: ["18% 25%", "75% 24%", "25% 75%", "80% 68%"],
    },
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 960,
      margin: "0 auto",
      padding: "20px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 20px",
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.5fr) minmax(240px, 1fr)",
      gap: 20,
    },
    targets: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 12,
    },
    targetCard: {
      minWidth: 0,
      padding: 10,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.7)",
      borderRadius: 9,
    },
    target: {
      position: "relative",
      width: 90,
      height: 90,
      margin: "0 auto 8px",
      border: "3px solid #f8fafc",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, transparent 0 18%, #f8fafc 19% 21%, transparent 22% 38%, #f8fafc 39% 41%, transparent 42%)",
    },
    dot: {
      position: "absolute",
      width: 7,
      height: 7,
      transform: "translate(-50%, -50%)",
      background: "#fde68a",
      borderRadius: "50%",
    },
    targetLabel: {
      fontSize: "clamp(11px, 1.5vw, 14px)",
      lineHeight: 1.3,
    },
    graph: {
      minWidth: 0,
      padding: 14,
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    graphTitle: {
      margin: "0 0 10px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: 21,
    },
    graphArea: {
      position: "relative",
      height: 250,
      borderLeft: "3px solid #f8fafc",
      borderBottom: "3px solid #f8fafc",
    },
    solution: {
      position: "absolute",
      top: "20%",
      left: 0,
      right: 0,
      borderTop: "2px dashed #fde68a",
    },
    solutionLabel: {
      position: "absolute",
      top: "13%",
      right: 4,
      color: "#fde68a",
      fontSize: 13,
    },
    graphDot: {
      position: "absolute",
      width: 10,
      height: 10,
      transform: "translate(-50%, -50%)",
      background: "#bfdbfe",
      borderRadius: "50%",
    },
  };

  const convergence = [
    ["15%", "82%"],
    ["30%", "64%"],
    ["47%", "48%"],
    ["64%", "35%"],
    ["82%", "24%"],
  ];

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>EXACTITUD, PRECISIÓN Y CONVERGENCIA</h1>

      <div style={styles.layout}>
        <div style={styles.targets}>
          {targets.map((target) => (
            <div key={target.name} style={styles.targetCard}>
              <div style={styles.target}>
                {target.dots.map((position, index) => {
                  const [left, top] = position.split(" ");

                  return (
                    <span
                      key={index}
                      style={{
                        ...styles.dot,
                        left,
                        top,
                      }}
                    />
                  );
                })}
              </div>

              <div style={styles.targetLabel}>{target.name}</div>
            </div>
          ))}
        </div>

        <div style={styles.graph}>
          <h2 style={styles.graphTitle}>Convergencia</h2>

          <div style={styles.graphArea}>
            <div style={styles.solution} />
            <span style={styles.solutionLabel}>Solución exacta</span>

            {convergence.map(([left, top], index) => (
              <span
                key={index}
                style={{
                  ...styles.graphDot,
                  left,
                  top,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Pizarron8 = () => {
  const applications = [
    ["Civil", "Puentes", "🌉"],
    ["Mecánica", "Motores", "⚙️"],
    ["Eléctrica", "Circuitos", "⚡"],
    ["Química", "Reactores", "🧪"],
    ["Computación", "IA", "🧠"],
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 820,
      margin: "0 auto",
      padding: "20px clamp(12px, 3vw, 26px)",
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
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    table: {
      display: "grid",
      gridTemplateColumns: "minmax(120px, .9fr) minmax(140px, 1.2fr) 70px",
      borderTop: "2px solid #f8fafc",
      borderLeft: "2px solid #f8fafc",
    },
    cell: {
      minWidth: 0,
      padding: "10px 8px",
      textAlign: "center",
      fontSize: "clamp(13px, 2vw, 17px)",
      borderRight: "2px solid #f8fafc",
      borderBottom: "2px solid #f8fafc",
      overflowWrap: "anywhere",
    },
    header: {
      color: "#fde68a",
      fontWeight: 700,
    },
    icon: {
      fontFamily: "sans-serif",
      fontSize: 25,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>APLICACIONES</h1>

      <div style={styles.table}>
        <div style={{ ...styles.cell, ...styles.header }}>Ingeniería</div>
        <div style={{ ...styles.cell, ...styles.header }}>Aplicación</div>
        <div style={{ ...styles.cell, ...styles.header }}>Ícono</div>

        {applications.map(([area, application, icon]) => (
          <div key={area} style={{ display: "contents" }}>
            <div style={styles.cell}>{area}</div>
            <div style={styles.cell}>{application}</div>
            <div style={{ ...styles.cell, ...styles.icon }}>{icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Pizarron9 = () => {
  const software = [
    ["MATLAB", "Ingeniería"],
    ["Octave", "Libre"],
    ["Python", "General"],
    ["Excel", "Introducción"],
    ["R", "Datos"],
    ["Scilab", "Libre"],
    ["Mathematica", "Simbólico"],
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 760,
      margin: "0 auto",
      padding: "20px clamp(12px, 3vw, 26px)",
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
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    table: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      borderTop: "2px solid #f8fafc",
      borderLeft: "2px solid #f8fafc",
    },
    cell: {
      minWidth: 0,
      padding: "10px 12px",
      textAlign: "center",
      fontSize: "clamp(14px, 2vw, 18px)",
      borderRight: "2px solid #f8fafc",
      borderBottom: "2px solid #f8fafc",
      overflowWrap: "anywhere",
    },
    header: {
      color: "#fde68a",
      fontWeight: 700,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>SOFTWARE PARA MÉTODOS NUMÉRICOS</h1>

      <div style={styles.table}>
        <div style={{ ...styles.cell, ...styles.header }}>Software</div>
        <div style={{ ...styles.cell, ...styles.header }}>Uso</div>

        {software.map(([name, use]) => (
          <div key={name} style={{ display: "contents" }}>
            <div style={styles.cell}>{name}</div>
            <div style={styles.cell}>{use}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Pizarron10 = () => {
  const methods = [
    "Raíces",
    "Sistemas lineales",
    "Interpolación",
    "Integración",
    "Diferenciación",
    "EDO",
    "Optimización",
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 900,
      margin: "0 auto",
      padding: "20px clamp(12px, 3vw, 26px)",
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
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    center: {
      width: "min(230px, 75%)",
      margin: "0 auto",
      padding: "17px 14px",
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(20px, 3vw, 27px)",
      border: "3px solid #f8fafc",
      borderRadius: "50%",
    },
    line: {
      width: 3,
      height: 24,
      margin: "0 auto",
      background: "#f8fafc",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(125px, 1fr))",
      gap: 11,
      paddingTop: 15,
      borderTop: "3px solid rgba(255,255,255,.75)",
    },
    card: {
      minWidth: 0,
      padding: "12px 9px",
      textAlign: "center",
      fontSize: "clamp(14px, 2vw, 17px)",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 8,
      overflowWrap: "anywhere",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>CLASIFICACIÓN GENERAL</h1>

      <div style={styles.center}>MÉTODOS NUMÉRICOS</div>
      <div style={styles.line} />

      <div style={styles.grid}>
        {methods.map((method) => (
          <div key={method} style={styles.card}>
            {method}
          </div>
        ))}
      </div>
    </section>
  );
};

export const Pizarron11 = () => {
  const qualities = [
    ["Preciso", "50%", "4%"],
    ["Estable", "88%", "32%"],
    ["Convergente", "74%", "82%"],
    ["Eficiente", "26%", "82%"],
    ["Fácil de implementar", "12%", "32%"],
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 780,
      margin: "0 auto",
      padding: "20px clamp(12px, 3vw, 26px)",
      overflow: "hidden",
      color: "#f8fafc",
      background:
        "radial-gradient(circle, #28634d 0%, #174737 58%, #10382d 100%)",
      border: "10px solid #6f4e37",
      borderRadius: 12,
      fontFamily: '"Comic Sans MS", "Segoe Print", cursive',
    },
    title: {
      margin: "0 0 12px",
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    area: {
      position: "relative",
      width: "min(100%, 560px)",
      height: 430,
      margin: "0 auto",
    },
    pentagon: {
      position: "absolute",
      inset: "65px 90px 55px",
      border: "4px solid rgba(255,255,255,.75)",
      clipPath: "polygon(50% 0%, 100% 38%, 81% 100%, 19% 100%, 0% 38%)",
    },
    center: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: 135,
      height: 90,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: "#fde68a",
      fontSize: 22,
      border: "3px solid #f8fafc",
      borderRadius: "50%",
      background: "#174737",
    },
    quality: {
      position: "absolute",
      transform: "translate(-50%, -50%)",
      width: 135,
      padding: "8px 7px",
      textAlign: "center",
      fontSize: "clamp(13px, 2vw, 16px)",
      border: "2px solid #f8fafc",
      borderRadius: 8,
      background: "#174737",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>CARACTERÍSTICAS DE UN BUEN MÉTODO</h1>

      <div style={styles.area}>
        <div style={styles.pentagon} />
        <div style={styles.center}>BUEN MÉTODO</div>

        {qualities.map(([label, left, top]) => (
          <div
            key={label}
            style={{
              ...styles.quality,
              left,
              top,
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </section>
  );
};

export const Pizarron12 = () => {
  const mainFlow = [
    ["🌉", "Problema real"],
    ["📐", "Modelo matemático"],
    ["≈", "Método numérico"],
    ["⚙️", "Algoritmo"],
    ["💻", "Computadora"],
    ["📊", "Solución aproximada"],
  ];

  const topics = [
    "Errores",
    "Interpolación",
    "Raíces",
    "Sistemas",
    "Integración",
    "EDO",
    "Optimización",
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 980,
      margin: "0 auto",
      padding: "18px clamp(10px, 2vw, 22px)",
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
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(22px, 4vw, 35px)",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 2fr) minmax(190px, .7fr)",
      gap: 18,
      alignItems: "start",
    },
    process: {
      display: "grid",
      gap: 8,
    },
    flow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      flexWrap: "wrap",
      gap: 6,
    },
    node: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 100,
      maxWidth: 135,
      padding: "9px 7px",
      textAlign: "center",
      fontSize: "clamp(12px, 1.6vw, 15px)",
      border: "2px solid #f8fafc",
      borderRadius: 7,
    },
    icon: {
      marginBottom: 4,
      fontFamily: "sans-serif",
      fontSize: 22,
    },
    arrow: {
      display: "flex",
      alignItems: "center",
      color: "#fde68a",
      fontSize: 23,
    },
    branches: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 12,
      maxWidth: 500,
      margin: "12px auto 0",
    },
    branch: {
      padding: 12,
      textAlign: "center",
      color: "#fde68a",
      border: "2px solid #f8fafc",
      borderRadius: 8,
    },
    result: {
      maxWidth: 420,
      margin: "0 auto",
      padding: 12,
      textAlign: "center",
      border: "3px solid #fde68a",
      borderRadius: 9,
    },
    down: {
      textAlign: "center",
      color: "#fde68a",
      fontSize: 25,
    },
    application: {
      maxWidth: 420,
      margin: "0 auto",
      padding: 12,
      textAlign: "center",
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    topics: {
      padding: 14,
      border: "3px solid #fde68a",
      borderRadius: 9,
    },
    topicsTitle: {
      margin: "0 0 10px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: 20,
    },
    topic: {
      padding: "5px 4px",
      textAlign: "center",
      fontSize: "clamp(13px, 1.7vw, 16px)",
    },
    topicArrow: {
      color: "#fde68a",
      textAlign: "center",
      lineHeight: 1,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>
        PANORAMA GENERAL DE LOS MÉTODOS NUMÉRICOS
      </h1>

      <div style={styles.layout}>
        <div style={styles.process}>
          <div style={styles.flow}>
            {mainFlow.map(([icon, label], index) => (
              <div key={label} style={{ display: "contents" }}>
                <div style={styles.node}>
                  <div style={styles.icon}>{icon}</div>
                  {label}
                </div>

                {index < mainFlow.length - 1 && (
                  <div style={styles.arrow}>→</div>
                )}
              </div>
            ))}
          </div>

          <div style={styles.down}>↓</div>

          <div style={styles.branches}>
            <div style={styles.branch}>Errores</div>
            <div style={styles.branch}>Convergencia</div>
          </div>

          <div style={styles.down}>↘ ↓ ↙</div>

          <div style={styles.result}>Resultados confiables</div>

          <div style={styles.down}>↓</div>

          <div style={styles.application}>
            Aplicaciones en Ingeniería
          </div>
        </div>

        <aside style={styles.topics}>
          <h2 style={styles.topicsTitle}>Temas del curso</h2>

          {topics.map((topic, index) => (
            <div key={topic}>
              <div style={styles.topic}>{topic}</div>

              {index < topics.length - 1 && (
                <div style={styles.topicArrow}>↓</div>
              )}
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
};