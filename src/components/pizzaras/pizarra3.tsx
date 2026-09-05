import React from "react";

export const Pizarron1 = () => {
  const equipoA = ["10.48", "10.49", "10.50", "10.49"];
  const equipoB = ["9.98", "10.04", "9.97", "10.01"];

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
    reference: {
      padding: 12,
      textAlign: "center",
      fontSize: "clamp(16px, 2.4vw, 21px)",
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    piece: {
      width: "min(320px, 75%)",
      height: 55,
      margin: "15px auto",
      position: "relative",
      border: "3px solid #fde68a",
      borderRadius: 5,
      
      textAlign: "center",
    },
    dimension: {
      position: "absolute",
      left: 0,
      right: 0,
      top: -25,
      textAlign: "center",
      color: "#fde68a",
      fontFamily: "monospace",
    },
    teams: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 14,
      marginTop: 16,
    },
    team: {
      minWidth: 0,
      padding: 14,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 9,
    },
    teamTitle: {
      margin: "0 0 8px",
      color: "#fde68a",
      fontSize: 20,
    },
    value: {
      fontFamily: "monospace",
      fontSize: "clamp(15px, 2.2vw, 19px)",
      lineHeight: 1.5,
    },
    note: {
      marginTop: 10,
      color: "#bfdbfe",
      fontSize: 15,
    },
    questions: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
      gap: 10,
      marginTop: 18,
    },
    question: {
      padding: 12,
      textAlign: "center",
      border: "3px solid #fde68a",
      borderRadius: 8,
      fontSize: "clamp(14px, 2vw, 18px)",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>EXACTITUD Y PRECISIÓN</h1>

      <div style={styles.reference}>
        Valor verdadero o de referencia: <strong  style={{ color: "#fde68a" }}>10.00 cm</strong>
      </div>

     
        <div style={styles.piece}>10.00 cm</div>
     
      <div style={styles.teams}>
        <div style={styles.team}>
          <h2 style={styles.teamTitle}>Equipo A 📏</h2>
          {equipoA.map((value, index) => (
            <div key={index} style={styles.value}>
              {value} cm
            </div>
          ))}
          <div style={styles.note}>→ Datos muy agrupados</div>
        </div>

        <div style={styles.team}>
          <h2 style={styles.teamTitle}>Equipo B 📐</h2>
          {equipoB.map((value, index) => (
            <div key={index} style={styles.value}>
              {value} cm
            </div>
          ))}
          <div style={styles.note}>→ Cerca de 10.00 cm</div>
        </div>
      </div>

      <div style={styles.questions}>
        <div style={styles.question}>¿Cuál equipo es más consistente?</div>
        <div style={styles.question}>
          ¿Cuál está más cerca del valor verdadero?
        </div>
      </div>
    </section>
  );
};

export const Pizarron2 = () => {
  const points = [
    { value: "19.60", left: "8%", color: "#fca5a5" },
    { value: "19.98", left: "72%", color: "#bfdbfe" },
    { value: "20.00", left: "80%", color: "#fde68a" },
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
      margin: "0 0 14px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(24px, 4vw, 37px)",
    },
    definition: {
      maxWidth: 600,
      margin: "0 auto",
      padding: 14,
      textAlign: "center",
      border: "3px solid #f8fafc",
      borderRadius: 9,
      fontSize: "clamp(15px, 2.2vw, 19px)",
      lineHeight: 1.45,
    },
    lineArea: {
      position: "relative",
      height: 145,
      margin: "28px auto 12px",
      maxWidth: 700,
    },
    line: {
      position: "absolute",
      top: 65,
      left: "5%",
      right: "5%",
      height: 4,
      background: "#f8fafc",
    },
    point: {
      position: "absolute",
      top: 48,
      transform: "translateX(-50%)",
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: "clamp(13px, 2vw, 17px)",
    },
    marker: {
      width: 11,
      height: 11,
      margin: "0 auto 7px",
      borderRadius: "50%",
      border: "2px solid #fff",
    },
    labels: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 12,
    },
    label: {
      padding: 12,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.75)",
      borderRadius: 8,
    },
    piece: {
      marginTop: 18,
      padding: 14,
      textAlign: "center",
      border: "3px solid #fde68a",
      borderRadius: 9,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>EXACTITUD</h1>

      <div style={styles.definition}>
        Cercanía entre el valor obtenido y el valor verdadero, aceptado o de
        referencia.
      </div>

      <div style={styles.lineArea}>
        <div style={styles.line} />

        {points.map((point) => (
          <div
            key={point.value}
            style={{ ...styles.point, left: point.left }}
          >
            <div
              style={{
                ...styles.marker,
                background: point.color,
              }}
            />
            {point.value}
          </div>
        ))}
      </div>

      <div style={styles.labels}>
        <div style={styles.label}>
          19.98 cm → diferencia pequeña → mayor exactitud
        </div>
        <div style={styles.label}>
          19.60 cm → diferencia grande → menor exactitud
        </div>
      </div>

      <div style={styles.piece}>
        📏 Pieza nominal: <strong  style={{ color: "#fde68a" }}>20.00 cm</strong>
      </div>
    </section>
  );
};

export const Pizarron3 = () => {
  const causes = [
    ["⚖️", "Mala calibración"],
    ["📏", "Método inadecuado"],
    ["🌡️", "Ambiente"],
    ["📄", "Modelo incompleto"],
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
      margin: "0 0 17px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 18,
    },
    calculation: {
      padding: 15,
      border: "3px solid #f8fafc",
      borderRadius: 9,
      fontFamily: "monospace",
      fontSize: "clamp(15px, 2.2vw, 19px)",
      lineHeight: 1.65,
    },
    result: {
      color: "#fde68a",
      fontSize: "1.15em",
    },
    causes: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 10,
    },
    cause: {
      minWidth: 0,
      padding: 11,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 8,
      fontSize: "clamp(13px, 1.8vw, 16px)",
    },
    icon: {
      display: "block",
      marginBottom: 5,
      fontFamily: "sans-serif",
      fontSize: 27,
    },
    relation: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 12,
      marginTop: 18,
    },
    note: {
      padding: 12,
      textAlign: "center",
      border: "3px solid #fde68a",
      borderRadius: 8,
      fontSize: "clamp(14px, 2vw, 17px)",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>EXACTITUD Y ERROR ABSOLUTO</h1>

      <div style={styles.layout}>
        <div style={styles.calculation}>
          Valor verdadero = 20.00 cm
          <br />
          Valor medido = 19.98 cm
          <br />
          <br />
          Ea = |x verdadero − x medido|
          <br />
          Ea = |20.00 − 19.98|
          <br />
          <strong style={styles.result}>Ea = 0.02 cm</strong>
        </div>

        <div style={styles.causes}>
          {causes.map(([icon, cause]) => (
            <div key={cause} style={styles.cause}>
              <span style={styles.icon}>{icon}</span>
              {cause}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.relation}>
        <div style={styles.note}>Error pequeño → mayor exactitud</div>
        <div style={styles.note}>Error grande → menor exactitud</div>
        <div style={styles.note}>Tolerancia: 50.00 ± 0.05 mm</div>
      </div>
    </section>
  );
};

export const Pizarron4 = () => {
  const measurements = ["15.21", "15.22", "15.21", "15.20", "15.21"];

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
      margin: "0 0 17px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(22px, 4vw, 35px)",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: 18,
    },
    values: {
      padding: 14,
      textAlign: "center",
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    value: {
      fontFamily: "monospace",
      fontSize: "clamp(17px, 2.6vw, 22px)",
      lineHeight: 1.45,
    },
    chart: {
      position: "relative",
      height: 180,
      borderBottom: "4px solid #f8fafc",
    },
    dot: {
      position: "absolute",
      width: 11,
      height: 11,
      bottom: -7,
      transform: "translateX(-50%)",
      background: "#fde68a",
      border: "2px solid #fff",
      borderRadius: "50%",
    },
    oval: {
      position: "absolute",
      left: "36%",
      right: "34%",
      bottom: -20,
      height: 42,
      border: "3px solid #bfdbfe",
      borderRadius: "50%",
    },
    flow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 7,
      marginTop: 22,
    },
    node: {
      minWidth: 120,
      padding: "9px 10px",
      textAlign: "center",
      border: "2px solid #f8fafc",
      borderRadius: 7,
      fontSize: "clamp(13px, 1.8vw, 16px)",
    },
    arrow: {
      color: "#fde68a",
      fontSize: 24,
    },
  };

  const dotPositions = ["42%", "48%", "45%", "39%", "44%"];

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>
        PRECISIÓN = CERCANÍA ENTRE RESULTADOS
      </h1>

      <div style={styles.layout}>
        <div style={styles.values}>
          <strong  style={{ color: "#fde68a" }}>Mediciones repetidas</strong>
          {measurements.map((value, index) => (
            <div key={index} style={styles.value}>
              {value} cm
            </div>
          ))}
        </div>

        <div>
          <div style={styles.chart}>
            {dotPositions.map((left, index) => (
              <span key={index} style={{ ...styles.dot, left }} />
            ))}
            <div style={styles.oval} />
          </div>
          <p style={{ textAlign: "center" }}>
            Poca dispersión → alta precisión
          </p>
        </div>
      </div>

      <div style={styles.flow}>
        {["Repetir", "Comparar", "Evaluar dispersión", "Precisión"].map(
          (step, index, array) => (
            <div key={step} style={{ display: "contents" }}>
              <div style={styles.node}>{step}</div>
              {index < array.length - 1 && (
                <div style={styles.arrow}>→</div>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export const Pizarron5 = () => {
  const dataA = ["15.20", "15.21", "15.22", "15.21", "15.20"];
  const dataB = ["14.80", "15.35", "14.95", "15.40", "14.75"];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 920,
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
    sets: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 14,
    },
    set: {
      minWidth: 0,
      padding: 13,
      textAlign: "center",
      border: "2px solid #f8fafc",
      borderRadius: 9,
    },
    heading: {
      margin: "0 0 8px",
      color: "#fde68a",
      fontSize: 20,
    },
    value: {
      fontFamily: "monospace",
      fontSize: "clamp(14px, 2vw, 18px)",
      lineHeight: 1.45,
    },
    charts: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 14,
      marginTop: 16,
    },
    chart: {
      position: "relative",
      height: 100,
      borderBottom: "4px solid #f8fafc",
    },
    dot: {
      position: "absolute",
      bottom: -7,
      width: 10,
      height: 10,
      transform: "translateX(-50%)",
      borderRadius: "50%",
      background: "#fde68a",
      border: "2px solid #fff",
    },
    formulas: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 12,
      marginTop: 20,
    },
    formula: {
      minWidth: 0,
      padding: 12,
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: "clamp(13px, 1.8vw, 16px)",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 8,
      overflowWrap: "anywhere",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>DISPERSIÓN, RANGO Y DESVIACIÓN ESTÁNDAR</h1>

      <div style={styles.sets}>
        {[["Conjunto A", dataA], ["Conjunto B", dataB]].map(
          ([name, values]) => (
            <div key={name} style={styles.set}>
              <h2 style={styles.heading}>{name}</h2>
              {values.map((value, index) => (
                <div key={index} style={styles.value}>
                  {value}
                </div>
              ))}
            </div>
          )
        )}
      </div>

      <div style={styles.charts}>
        <div style={styles.chart}>
          {["43%", "47%", "50%", "46%", "43%"].map((left, index) => (
            <span key={index} style={{ ...styles.dot, left }} />
          ))}
        </div>

        <div style={styles.chart}>
          {["10%", "72%", "28%", "82%", "5%"].map((left, index) => (
            <span key={index} style={{ ...styles.dot, left }} />
          ))}
        </div>
      </div>

      <div style={styles.formulas}>
        <div style={styles.formula}>Rango = máximo − mínimo</div>
        <div style={styles.formula}>x̄ = (x₁ + x₂ + … + xₙ) / n</div>
        <div style={styles.formula}>
          s = √[Σ(xᵢ − x̄)² / (n − 1)]
        </div>
      </div>
    </section>
  );
};

export const Pizarron6 = () => {
  const exactitud = [
    "Compara con el valor verdadero",
    "Se relaciona con el error",
    "¿Qué tan correcto?",
    "Mejora con calibración",
    "No depende de muchos decimales",
  ];

  const precision = [
    "Compara mediciones entre sí",
    "Se relaciona con la dispersión",
    "¿Qué tan repetible?",
    "Mejora controlando variaciones",
    "No garantiza cercanía al valor real",
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
      fontSize: "clamp(22px, 4vw, 35px)",
    },
    columns: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 14,
    },
    column: {
      minWidth: 0,
      padding: 14,
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    heading: {
      margin: "0 0 10px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(19px, 3vw, 25px)",
    },
    list: {
      margin: 0,
      paddingLeft: 20,
      fontSize: "clamp(13px, 1.8vw, 16px)",
      lineHeight: 1.55,
    },
    drawing: {
      marginTop: 15,
      padding: 12,
      textAlign: "center",
      fontFamily: "monospace",
      fontSize: "clamp(17px, 2.8vw, 23px)",
      borderTop: "2px solid rgba(255,255,255,.7)",
    },
    conclusion: {
      marginTop: 18,
      padding: 13,
      textAlign: "center",
      border: "3px solid #fde68a",
      borderRadius: 9,
      fontSize: "clamp(15px, 2.2vw, 19px)",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>EXACTITUD VS. PRECISIÓN</h1>

      <div style={styles.columns}>
        <div style={styles.column}>
          <h2 style={styles.heading}>🎯 EXACTITUD</h2>
          <ul style={styles.list}>
            {exactitud.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div style={styles.drawing}>Valor real ● ← ○ medición</div>
        </div>

        <div style={styles.column}>
          <h2 style={styles.heading}>🔁 PRECISIÓN</h2>
          <ul style={styles.list}>
            {precision.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div style={styles.drawing}>○ ○ ○ ○ mediciones agrupadas</div>
        </div>
      </div>

      <div style={styles.conclusion}>
        Exactitud: respecto de una referencia. Precisión: respecto de otras
        mediciones.
      </div>
    </section>
  );
};

export const Pizarron7 = () => {
  const targets = [
    {
      title: "Alta exactitud y alta precisión",
      subtitle: "Correctos y consistentes",
      dots: ["48% 48%", "52% 49%", "49% 53%", "53% 52%", "50% 46%"],
    },
    {
      title: "Baja exactitud y alta precisión",
      subtitle: "Consistentes, pero desplazados",
      dots: ["25% 27%", "29% 28%", "26% 31%", "30% 32%", "27% 25%"],
    },
    {
      title: "Promedio exacto, baja precisión",
      subtitle: "Dispersos; promedio cercano",
      dots: ["25% 50%", "75% 48%", "50% 24%", "48% 76%", "52% 51%"],
    },
    {
      title: "Baja exactitud y baja precisión",
      subtitle: "Dispersos y desplazados",
      dots: ["15% 22%", "38% 30%", "20% 70%", "65% 72%", "74% 40%"],
    },
  ];

  const styles = {
    board: {
      boxSizing: "border-box",
      width: "100%",
      maxWidth: 920,
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
      fontSize: "clamp(22px, 4vw, 35px)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 13,
    },
    card: {
      minWidth: 0,
      padding: 11,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 9,
    },
    cardTitle: {
      margin: "0 0 8px",
      color: "#fde68a",
      fontSize: "clamp(14px, 2vw, 17px)",
    },
    target: {
      position: "relative",
      width: 110,
      height: 110,
      margin: "0 auto 8px",
      border: "3px solid #f8fafc",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, transparent 0 17%, #f8fafc 18% 20%, transparent 21% 37%, #f8fafc 38% 40%, transparent 41%)",
    },
    dot: {
      position: "absolute",
      width: 8,
      height: 8,
      transform: "translate(-50%, -50%)",
      background: "#fde68a",
      borderRadius: "50%",
    },
    subtitle: {
      fontSize: "clamp(12px, 1.7vw, 15px)",
      lineHeight: 1.3,
    },
    legend: {
      marginTop: 15,
      padding: 12,
      textAlign: "center",
      border: "3px solid #fde68a",
      borderRadius: 8,
      fontSize: "clamp(13px, 1.8vw, 16px)",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>LAS CUATRO COMBINACIONES</h1>

      <div style={styles.grid}>
        {targets.map((target) => (
          <div key={target.title} style={styles.card}>
            <h2 style={styles.cardTitle}>{target.title}</h2>

            <div style={styles.target}>
              {target.dots.map((position, index) => {
                const [left, top] = position.split(" ");

                return (
                  <span
                    key={index}
                    style={{ ...styles.dot, left, top }}
                  />
                );
              })}
            </div>

            <div style={styles.subtitle}>{target.subtitle}</div>
          </div>
        ))}
      </div>

      <div style={styles.legend}>
        Centro = valor verdadero · Distancia = error · Separación = dispersión
      </div>
    </section>
  );
};

export const Pizarron8 = () => {
  const rows = [
    ["A", "9.99, 10.00, 10.01, 10.00", "Alta exactitud y alta precisión"],
    ["B", "10.49, 10.50, 10.51, 10.50", "Alta precisión, baja exactitud"],
    ["C", "9.70, 10.30, 9.80, 10.20", "Baja precisión; promedio cercano"],
    ["D", "10.60, 11.10, 10.30, 11.40", "Baja exactitud y baja precisión"],
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
      margin: "0 0 12px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(22px, 4vw, 35px)",
    },
    reference: {
      marginBottom: 14,
      textAlign: "center",
      fontSize: "clamp(16px, 2.3vw, 20px)",
    },
    table: {
      display: "grid",
      gridTemplateColumns: "55px minmax(220px, 1.3fr) minmax(180px, 1fr)",
      borderTop: "2px solid #f8fafc",
      borderLeft: "2px solid #f8fafc",
    },
    cell: {
      minWidth: 0,
      padding: "10px 8px",
      borderRight: "2px solid #f8fafc",
      borderBottom: "2px solid #f8fafc",
      fontSize: "clamp(12px, 1.7vw, 15px)",
      overflowWrap: "anywhere",
    },
    header: {
      color: "#fde68a",
      textAlign: "center",
      fontWeight: 700,
    },
    case: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fde68a",
      fontSize: 20,
    },
    measurements: {
      fontFamily: "monospace",
      textAlign: "center",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>EXACTITUD Y PRECISIÓN CON DATOS</h1>

      <div style={styles.reference}>
        Valor de referencia: <strong  style={{ color: "#fde68a" }}>10.00 cm</strong>
      </div>

      <div style={styles.table}>
        <div style={{ ...styles.cell, ...styles.header }}>Caso</div>
        <div style={{ ...styles.cell, ...styles.header }}>Mediciones</div>
        <div style={{ ...styles.cell, ...styles.header }}>
          Interpretación
        </div>

        {rows.map(([caseName, values, interpretation]) => (
          <div key={caseName} style={{ display: "contents" }}>
            <div style={{ ...styles.cell, ...styles.case }}>{caseName}</div>
            <div style={{ ...styles.cell, ...styles.measurements }}>
              {values}
            </div>
            <div style={styles.cell}>{interpretation}</div>
          </div>
        ))}
      </div>
    </section>
  );
};


export const Pizarron9 = () => {
  const examples = [
    ["2.0 kg", "2.5 kg"],
    ["4.0 kg", "4.5 kg"],
    ["6.0 kg", "6.5 kg"],
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
      margin: "0 0 8px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    definition: {
      textAlign: "center",
      fontSize: "clamp(15px, 2.2vw, 19px)",
    },
    scale: {
      width: 120,
      height: 80,
      margin: "18px auto",
      position: "relative",
      border: "3px solid #f8fafc",
      borderRadius: "50% 50% 12px 12px",
    },
    needle: {
      position: "absolute",
      left: "50%",
      bottom: 10,
      width: 4,
      height: 48,
      background: "#fde68a",
      transform: "rotate(20deg)",
      transformOrigin: "bottom",
    },
    examples: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 10,
    },
    example: {
      minWidth: 0,
      padding: 11,
      textAlign: "center",
      fontFamily: "monospace",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 8,
      fontSize: "clamp(14px, 2vw, 18px)",
    },
    flow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 7,
      marginTop: 18,
    },
    node: {
      minWidth: 120,
      padding: 9,
      textAlign: "center",
      border: "2px solid #fde68a",
      borderRadius: 7,
      fontSize: "clamp(13px, 1.8vw, 16px)",
    },
    arrow: {
      color: "#fde68a",
      fontSize: 24,
    },
    warning: {
      marginTop: 15,
      textAlign: "center",
      color: "#fca5a5",
      fontSize: 18,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>ERROR SISTEMÁTICO</h1>
      <div style={styles.definition}>Desviación constante o predecible.</div>

      <div style={styles.scale}>
        <div style={styles.needle} />
      </div>

      <div style={styles.examples}>
        {examples.map(([real, measured]) => (
          <div key={real} style={styles.example}>
            {real} → {measured}
          </div>
        ))}
      </div>

      <div style={styles.flow}>
        {[
          "Mala calibración",
          "Sesgo constante",
          "Resultados desplazados",
          "Menor exactitud",
        ].map((step, index, array) => (
          <div key={step} style={{ display: "contents" }}>
            <div style={styles.node}>{step}</div>
            {index < array.length - 1 && (
              <div style={styles.arrow}>→</div>
            )}
          </div>
        ))}
      </div>

      <div style={styles.warning}>Repetir no corrige el sesgo.</div>
    </section>
  );
};


export const Pizarron10 = () => {
  const measurements = ["10.02", "9.97", "10.05", "9.99", "10.01"];
  const causes = ["📳 Vibración", "🌡️ Temperatura", "〰️ Ruido", "👁️ Lectura"];

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
      margin: "0 0 8px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(23px, 4vw, 36px)",
    },
    definition: {
      textAlign: "center",
      fontSize: "clamp(15px, 2.2vw, 19px)",
    },
    center: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 16,
      marginTop: 18,
    },
    values: {
      padding: 14,
      textAlign: "center",
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    value: {
      fontFamily: "monospace",
      fontSize: "clamp(16px, 2.3vw, 20px)",
      lineHeight: 1.5,
    },
    causes: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 10,
    },
    cause: {
      minWidth: 0,
      padding: 12,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 8,
      fontSize: "clamp(13px, 1.8vw, 16px)",
    },
    flow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 7,
      marginTop: 18,
    },
    node: {
      minWidth: 120,
      padding: 9,
      textAlign: "center",
      border: "2px solid #fde68a",
      borderRadius: 7,
      fontSize: "clamp(13px, 1.8vw, 16px)",
    },
    arrow: {
      color: "#fde68a",
      fontSize: 24,
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>ERROR ALEATORIO</h1>
      <div style={styles.definition}>
        Variación impredecible entre mediciones.
      </div>

      <div style={styles.center}>
        <div style={styles.values}>
          {measurements.map((value, index) => (
            <div key={index} style={styles.value}>
              {value}
            </div>
          ))}
        </div>

        <div style={styles.causes}>
          {causes.map((cause) => (
            <div key={cause} style={styles.cause}>
              {cause}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.flow}>
        {[
          "Perturbaciones",
          "Resultados diferentes",
          "Mayor dispersión",
          "Menor precisión",
        ].map((step, index, array) => (
          <div key={step} style={{ display: "contents" }}>
            <div style={styles.node}>{step}</div>
            {index < array.length - 1 && (
              <div style={styles.arrow}>→</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export const Pizarron11 = () => {
  const systematic = [
    "Comparar con patrón",
    "Calibrar",
    "Corregir procedimiento",
    "Aplicar factor de corrección",
    "Mejorar el modelo",
  ];

  const random = [
    "Repetir mediciones",
    "Calcular promedio",
    "Controlar ambiente",
    "Estandarizar procedimiento",
    "Usar mejor resolución",
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
    columns: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 14,
    },
    column: {
      minWidth: 0,
      padding: 14,
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    heading: {
      margin: "0 0 10px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(17px, 2.8vw, 23px)",
    },
    flow: {
      textAlign: "center",
      color: "#bfdbfe",
      fontSize: "clamp(14px, 2vw, 18px)",
      marginBottom: 10,
    },
    list: {
      margin: 0,
      paddingLeft: 20,
      lineHeight: 1.55,
      fontSize: "clamp(13px, 1.8vw, 16px)",
    },
    formula: {
      marginTop: 18,
      padding: 12,
      textAlign: "center",
      fontFamily: "monospace",
      border: "3px solid #fde68a",
      borderRadius: 8,
      fontSize: "clamp(14px, 2vw, 18px)",
    },
    warning: {
      marginTop: 14,
      textAlign: "center",
      fontSize: "clamp(14px, 2vw, 17px)",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>CÓMO REDUCIR LOS ERRORES</h1>

      <div style={styles.columns}>
        <div style={styles.column}>
          <h2 style={styles.heading}>Error sistemático</h2>
          <div style={styles.flow}>Detectar → calibrar → corregir</div>
          <ul style={styles.list}>
            {systematic.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div style={styles.column}>
          <h2 style={styles.heading}>Error aleatorio</h2>
          <div style={styles.flow}>Repetir → promediar → controlar</div>
          <ul style={styles.list}>
            {random.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div style={styles.formula}>x̄ = (x₁ + x₂ + … + xₙ) / n</div>

      <div style={styles.warning}>
        Repetir no elimina un error sistemático. Promediar ayuda principalmente
        frente al error aleatorio.
      </div>
    </section>
  );
};


export const Pizarron12 = () => {
  const steps = [
    ["Solución verdadera", "x = 2.7182818…"],
    ["Método numérico", "Aproximación"],
    ["Iteraciones", "x ≈ 2.7183"],
    ["Resultado", "2.7183"],
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
      margin: "0 0 16px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(21px, 4vw, 34px)",
    },
    flow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      flexWrap: "wrap",
      gap: 7,
    },
    node: {
      minWidth: 130,
      maxWidth: 170,
      padding: 12,
      textAlign: "center",
      border: "2px solid #f8fafc",
      borderRadius: 8,
      fontSize: "clamp(13px, 1.8vw, 16px)",
    },
    value: {
      marginTop: 7,
      color: "#fde68a",
      fontFamily: "monospace",
    },
    arrow: {
      display: "flex",
      alignItems: "center",
      color: "#fde68a",
      fontSize: 24,
    },
    lower: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 12,
      marginTop: 18,
    },
    card: {
      minWidth: 0,
      padding: 13,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 8,
      fontSize: "clamp(13px, 1.8vw, 16px)",
    },
    formula: {
      marginTop: 8,
      color: "#fde68a",
      fontFamily: "monospace",
      overflowWrap: "anywhere",
    },
    balance: {
      marginTop: 18,
      padding: 13,
      textAlign: "center",
      border: "3px solid #fde68a",
      borderRadius: 8,
      fontSize: "clamp(14px, 2vw, 17px)",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>
        EXACTITUD Y PRECISIÓN EN MÉTODOS NUMÉRICOS
      </h1>

      <div style={styles.flow}>
        {steps.map(([label, value], index) => (
          <div key={label} style={{ display: "contents" }}>
            <div style={styles.node}>
              {label}
              <div style={styles.value}>{value}</div>
            </div>
            {index < steps.length - 1 && (
              <div style={styles.arrow}>→</div>
            )}
          </div>
        ))}
      </div>

      <div style={styles.lower}>
        <div style={styles.card}>
          Criterio de parada
          <div style={styles.formula}>
            |xᵢ₊₁ − xᵢ| &lt; ε
          </div>
        </div>

        <div style={styles.card}>
          💻 Memoria limitada
          <div style={styles.formula}>0.1 ≈ representación binaria</div>
        </div>

        <div style={styles.card}>
          Presentación coherente
          <div style={styles.formula}>5.27 m, no 5.2738461 m</div>
        </div>
      </div>

      <div style={styles.balance}>
        Tolerancia menor → mayor exactitud esperada, pero mayor costo
        computacional.
      </div>
    </section>
  );
};

export const Pizarron13 = () => {
  const sections = [
    {
      title: "Manufactura",
      icon: "⚙️",
      main: "Ø50.00 ± 0.05 mm",
      items: ["Ensamblaje", "Desgaste", "Vibración", "Tolerancia"],
    },
    {
      title: "Instrumentación",
      icon: "🌡️",
      main: "Real: 80 °C · Sensor: 75 °C",
      items: ["Sensor inexacto", "Dato incorrecto", "Control equivocado"],
    },
    {
      title: "Simulación",
      icon: "💻",
      main: "Muchos decimales ≠ modelo correcto",
      items: ["Modelo", "Datos", "Método", "Validación"],
    },
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
      margin: "0 0 16px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: "clamp(22px, 4vw, 35px)",
    },
    columns: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: 12,
    },
    card: {
      minWidth: 0,
      padding: 12,
      textAlign: "center",
      border: "3px solid #f8fafc",
      borderRadius: 9,
    },
    heading: {
      margin: "0 0 8px",
      color: "#fde68a",
      fontSize: "clamp(16px, 2.5vw, 21px)",
    },
    icon: {
      fontFamily: "sans-serif",
      fontSize: 31,
    },
    main: {
      margin: "10px 0",
      padding: 8,
      fontFamily: "monospace",
      fontSize: "clamp(12px, 1.7vw, 15px)",
      border: "2px solid rgba(255,255,255,.7)",
      borderRadius: 7,
      overflowWrap: "anywhere",
    },
    list: {
      margin: 0,
      paddingLeft: 18,
      textAlign: "left",
      fontSize: "clamp(12px, 1.7vw, 15px)",
      lineHeight: 1.45,
    },
    conclusion: {
      marginTop: 17,
      padding: 13,
      textAlign: "center",
      border: "3px solid #fde68a",
      borderRadius: 8,
      fontSize: "clamp(14px, 2vw, 18px)",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>APLICACIONES EN INGENIERÍA</h1>

      <div style={styles.columns}>
        {sections.map((section) => (
          <div key={section.title} style={styles.card}>
            <h2 style={styles.heading}>{section.title}</h2>
            <div style={styles.icon}>{section.icon}</div>
            <div style={styles.main}>{section.main}</div>

            <ul style={styles.list}>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={styles.conclusion}>
        Resultados confiables requieren exactitud y precisión adecuadas.
      </div>
    </section>
  );
};

export const Pizarron14 = () => {
  const questions = [
    "¿Existe un valor de referencia?",
    "¿Qué tan lejos está el resultado?",
    "¿Qué tan dispersas están las repeticiones?",
    "¿El error parece constante o variable?",
  ];

  const warnings = [
    "Correcto no significa repetible.",
    "Repetible no significa correcto.",
    "Muchos decimales no significan alta exactitud.",
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
      fontSize: "clamp(22px, 4vw, 35px)",
    },
    layout: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.6fr) minmax(220px, .7fr)",
      gap: 15,
    },
    map: {
      display: "grid",
      gap: 8,
    },
    root: {
      maxWidth: 280,
      margin: "0 auto",
      padding: 11,
      textAlign: "center",
      color: "#fde68a",
      border: "3px solid #f8fafc",
      borderRadius: 8,
      fontSize: "clamp(17px, 2.5vw, 21px)",
    },
    branches: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 10,
    },
    branch: {
      minWidth: 0,
      padding: 11,
      textAlign: "center",
      border: "2px solid rgba(255,255,255,.8)",
      borderRadius: 8,
      fontSize: "clamp(12px, 1.7vw, 15px)",
      lineHeight: 1.45,
    },
    heading: {
      color: "#fde68a",
      fontSize: "clamp(16px, 2.4vw, 20px)",
    },
    arrow: {
      textAlign: "center",
      color: "#fde68a",
      fontSize: 22,
      lineHeight: 1,
    },
    questions: {
      padding: 13,
      border: "3px solid #fde68a",
      borderRadius: 8,
    },
    questionsTitle: {
      margin: "0 0 9px",
      color: "#fde68a",
      textAlign: "center",
      fontSize: 19,
    },
    list: {
      margin: 0,
      paddingLeft: 20,
      fontSize: "clamp(12px, 1.7vw, 15px)",
      lineHeight: 1.5,
    },
    numeric: {
      marginTop: 14,
      padding: 12,
      textAlign: "center",
      border: "2px solid #f8fafc",
      borderRadius: 8,
      fontSize: "clamp(13px, 1.8vw, 16px)",
    },
    warnings: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
      gap: 9,
      marginTop: 14,
    },
    warning: {
      padding: 10,
      textAlign: "center",
      border: "2px solid #fde68a",
      borderRadius: 7,
      fontSize: "clamp(12px, 1.7vw, 15px)",
    },
    final: {
      marginTop: 14,
      textAlign: "center",
      color: "#fde68a",
      fontSize: "clamp(17px, 2.5vw, 22px)",
    },
  };

  return (
    <section style={styles.board}>
      <h1 style={styles.title}>EXACTITUD Y PRECISIÓN: SÍNTESIS</h1>

      <div style={styles.layout}>
        <div style={styles.map}>
          <div style={styles.root}>CALIDAD DEL RESULTADO</div>
          <div style={styles.arrow}>↓</div>

          <div style={styles.branches}>
            <div style={styles.branch}>
              <strong style={styles.heading}>🎯 EXACTITUD</strong>
              <br />
              Cercanía al valor verdadero
              <br />
              ↓<br />
              Error o sesgo
              <br />
              ↓<br />
              Error sistemático
              <br />
              ↓<br />
              Calibrar y corregir
            </div>

            <div style={styles.branch}>
              <strong style={styles.heading}>••• PRECISIÓN</strong>
              <br />
              Cercanía entre resultados
              <br />
              ↓<br />
              Dispersión
              <br />
              ↓<br />
              Error aleatorio
              <br />
              ↓<br />
              Repetir y controlar
            </div>
          </div>

          <div style={styles.arrow}>↓</div>
          <div style={styles.root}>✅ RESULTADO CONFIABLE</div>
        </div>

        <aside style={styles.questions}>
          <h2 style={styles.questionsTitle}>Diagnóstico</h2>
          <ol style={styles.list}>
            {questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </aside>
      </div>

      <div style={styles.numeric}>
        Datos + modelo + algoritmo + tolerancia → resultado numérico →
        validación e interpretación
      </div>

      <div style={styles.warnings}>
        {warnings.map((warning, index) => (
          <div key={warning} style={styles.warning}>
            {index + 1}. {warning}
          </div>
        ))}
      </div>

      <div style={styles.final}>
        La calidad se demuestra; no se supone.
      </div>
    </section>
  );
};