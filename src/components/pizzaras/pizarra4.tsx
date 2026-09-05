

const boardStyle = {
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
};

const titleStyle = {
  margin: "0 0 18px",
  color: "#fde68a",
  textAlign: "center",
  fontSize: "clamp(22px, 4vw, 36px)",
};

const boxStyle = {
  boxSizing: "border-box",
  minWidth: 0,
  padding: 12,
  textAlign: "center",
  border: "2px solid rgba(255,255,255,.85)",
  borderRadius: 8,
  overflowWrap: "anywhere",
};

const yellowBoxStyle = {
  ...boxStyle,
  border: "3px solid #fde68a",
};

const arrowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fde68a",
  fontSize: 24,
};

const Board = ({ title, children }) => (
  <section style={boardStyle}>
    <h1 style={titleStyle}>{title}</h1>
    {children}
  </section>
);

const Flow = ({ items, vertical = false }) => (
  <div
    style={{
      display: "flex",
      flexDirection: vertical ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: vertical ? "nowrap" : "wrap",
      gap: 7,
    }}
  >
    {items.map((item, index) => (
      <div key={`${item}-${index}`} style={{ display: "contents" }}>
        <div style={{ ...boxStyle, minWidth: vertical ? 190 : 115 }}>
          {item}
        </div>

        {index < items.length - 1 && (
          <div style={arrowStyle}>{vertical ? "↓" : "→"}</div>
        )}
      </div>
    ))}
  </div>
);

const Table = ({ headers, rows, columns }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        columns || `repeat(${headers.length}, minmax(0, 1fr))`,
      borderTop: "2px solid #f8fafc",
      borderLeft: "2px solid #f8fafc",
    }}
  >
    {headers.map((header) => (
      <div
        key={header}
        style={{
          padding: 9,
          color: "#fde68a",
          textAlign: "center",
          fontWeight: 700,
          borderRight: "2px solid #f8fafc",
          borderBottom: "2px solid #f8fafc",
        }}
      >
        {header}
      </div>
    ))}

    {rows.flatMap((row, rowIndex) =>
      row.map((cell, cellIndex) => (
        <div
          key={`${rowIndex}-${cellIndex}`}
          style={{
            minWidth: 0,
            padding: 9,
            textAlign: "center",
            fontSize: "clamp(12px, 1.8vw, 16px)",
            borderRight: "2px solid #f8fafc",
            borderBottom: "2px solid #f8fafc",
            overflowWrap: "anywhere",
          }}
        >
          {cell}
        </div>
      ))
    )}
  </div>
);

const Target = ({ dots = [] }) => (
  <div
    style={{
      position: "relative",
      width: 92,
      height: 92,
      margin: "0 auto",
      border: "3px solid #f8fafc",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, transparent 0 17%, #f8fafc 18% 20%, transparent 21% 37%, #f8fafc 38% 40%, transparent 41%)",
    }}
  >
    {dots.map(([left, top], index) => (
      <span
        key={index}
        style={{
          position: "absolute",
          left,
          top,
          width: 7,
          height: 7,
          transform: "translate(-50%, -50%)",
          background: "#fde68a",
          borderRadius: "50%",
        }}
      />
    ))}
  </div>
);

export const Pizarron1 = () => (
  <Board title="¿QUÉ ES EL ERROR?">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 16,
      }}
    >
      <div style={boxStyle}>
        <div style={{ fontSize: 36 }}>⚙️</div>
        <h2 style={{ color: "#fde68a" }}>Valor verdadero</h2>
        <div style={{ fontFamily: "monospace", fontSize: 24 }}>10.00 m</div>
      </div>

      <div style={boxStyle}>
        <div style={{ fontSize: 36 }}>📏</div>
        <h2 style={{ color: "#fde68a" }}>Valor medido</h2>
        <div style={{ fontFamily: "monospace", fontSize: 24 }}>9.97 m</div>
      </div>
    </div>

    <div style={{ ...yellowBoxStyle, marginTop: 18 }}>
      E = x<sub>verdadero</sub> − x<sub>aproximado</sub>
      <br />
      <strong style={{ fontFamily: "monospace", fontSize: 21 }}>
        E = 10.00 − 9.97 = 0.03 m
      </strong>
    </div>

    <div style={{ marginTop: 18 }}>
      <Flow
        items={["Valor verdadero", "Valor aproximado", "Error"]}
      />
    </div>
  </Board>
);

export const Pizarron2 = () => (
  <Board title="VALOR VERDADERO, APROXIMADO E INCERTIDUMBRE">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 18,
      }}
    >
      <Flow
        vertical
        items={[
          "Valor verdadero",
          "Valor aproximado",
          "Incertidumbre",
        ]}
      />

      <div style={boxStyle}>
        <div style={{ fontSize: 34 }}>📏</div>
        <div
          style={{
            margin: "15px 0",
            fontFamily: "monospace",
            fontSize: 23,
            color: "#fde68a",
          }}
        >
          25.30 ± 0.05 cm
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            paddingTop: 12,
            borderTop: "4px solid #f8fafc",
            fontFamily: "monospace",
          }}
        >
          <span>25.25</span>
          <span>25.30</span>
          <span>25.35</span>
        </div>
      </div>
    </div>

    <div style={{ ...yellowBoxStyle, marginTop: 18 }}>
      Error = diferencia.
      <br />
      Incertidumbre = intervalo probable.
    </div>
  </Board>
);

export const Pizarron3 = () => (
  <Board title="ERROR ABSOLUTO">
    <div
      style={{
        ...yellowBoxStyle,
        fontFamily: "monospace",
        fontSize: "clamp(18px, 3vw, 26px)",
      }}
    >
      E<sub>a</sub> = |x<sub>v</sub> − x<sub>a</sub>|
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 10,
        marginTop: 18,
        alignItems: "center",
      }}
    >
      <div style={boxStyle}>Valor real<br /><strong  style={{ color: "#fde68a" }}>100 Ω</strong></div>
      <div style={arrowStyle}>−</div>
      <div style={boxStyle}>Valor medido<br /><strong  style={{ color: "#fde68a" }}>98 Ω</strong></div>
    </div>

    <div
      style={{
        margin: "15px auto",
        maxWidth: 220,
        ...yellowBoxStyle,
        fontFamily: "monospace",
        fontSize: 23,
      }}
    >
      E<sub>a</sub> = 2 Ω
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 10,
      }}
    >
      {[
        "Conserva unidades",
        "Indica magnitud",
        "No muestra importancia relativa",
      ].map((text) => (
        <div key={text} style={boxStyle}>{text}</div>
      ))}
    </div>
  </Board>
);

export const Pizarron4 = () => (
  <Board title="ERROR RELATIVO Y PORCENTUAL">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: 16,
      }}
    >
      <div style={{ ...boxStyle, fontFamily: "monospace", fontSize: 23 }}>
        E<sub>r</sub> =
        <br />
        E<sub>a</sub> / |x<sub>v</sub>|
      </div>

      <div style={{ ...boxStyle, fontFamily: "monospace", fontSize: 23 }}>
        E<sub>p</sub> = E<sub>r</sub> × 100
      </div>
    </div>

    <div style={{ ...yellowBoxStyle, marginTop: 18 }}>
      Valor verdadero = 50
      <br />
      Valor aproximado = 49
      <br />
      <strong style={{ fontFamily: "monospace", fontSize: 23 }}>
        Error porcentual = 2%
      </strong>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 12,
        marginTop: 16,
      }}
    >
      <div style={boxStyle}>El error relativo no tiene unidades.</div>
      <div style={boxStyle}>
        El porcentaje facilita la interpretación.
      </div>
    </div>
  </Board>
);

export const Pizarron5 = () => (
  <Board title="ERROR ABSOLUTO VS. ERROR RELATIVO">
    <Table
      headers={["Valor real", "Error absoluto", "Error porcentual"]}
      rows={[
        ["10", "1", "10%"],
        ["1000", "1", "0.1%"],
      ]}
    />

    <div
      style={{
        ...yellowBoxStyle,
        marginTop: 18,
        fontSize: "clamp(15px, 2.2vw, 19px)",
      }}
    >
      Perder $1 no representa lo mismo para quien tiene $10 que para quien
      tiene $1000.
    </div>
  </Board>
);

export const Pizarron6 = () => (
  <Board title="ERROR VERDADERO Y APROXIMADO">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 14,
      }}
    >
      <div style={boxStyle}>
        <h2 style={{ color: "#fde68a" }}>Error verdadero</h2>
        <div style={{ fontFamily: "monospace", fontSize: 22 }}>
          x<sub>v</sub> − x<sub>a</sub>
        </div>
      </div>

      <div style={boxStyle}>
        <h2 style={{ color: "#fde68a" }}>Error aproximado</h2>
        <div style={{ fontFamily: "monospace", fontSize: 22 }}>
          x<sub>i</sub> − x<sub>i−1</sub>
        </div>
      </div>
    </div>

    <div style={{ marginTop: 20 }}>
      <Flow items={["1.4", "1.41", "1.414", "1.4142"]} />
    </div>

    <div style={{ ...yellowBoxStyle, marginTop: 18 }}>
      El error aproximado mide cuánto cambia la solución, no cuánto falta para
      llegar al valor verdadero.
    </div>
  </Board>
);

export const Pizarron7 = () => (
  <Board title="ERRORES INHERENTES Y CONDICIONAMIENTO">
    <div
      style={{
        ...yellowBoxStyle,
        marginBottom: 18,
        fontFamily: "monospace",
        fontSize: 21,
      }}
    >
      Dato aproximado: 9.8 &nbsp; vs. &nbsp; 9.80665
    </div>

    <Flow items={["Datos", "Método", "Resultado"]} />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 14,
        marginTop: 18,
      }}
    >
      <div style={boxStyle}>
        <h2 style={{ color: "#fde68a" }}>Bien condicionado</h2>
        Pequeños errores producen cambios pequeños.
      </div>

      <div style={boxStyle}>
        <h2 style={{ color: "#fde68a" }}>Mal condicionado</h2>
        Pequeños errores producen grandes cambios.
      </div>
    </div>
  </Board>
);

export const Pizarron8 = () => (
  <Board title="ERROR DE REDONDEO">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
        gap: 16,
      }}
    >
      <div style={boxStyle}>
        <div style={{ fontSize: 28 }}>π</div>
        <div style={arrowStyle}>↓</div>
        <div style={{ color: "#fde68a", fontSize: 25 }}>3.14</div>
      </div>

      <div style={boxStyle}>
        <div style={{ fontFamily: "monospace", fontSize: 24 }}>0.1</div>
        <div style={arrowStyle}>↓</div>
        Representación binaria aproximada
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 12,
        marginTop: 18,
      }}
    >
      <div style={yellowBoxStyle}>Redondeo</div>
      <div style={yellowBoxStyle}>Truncamiento</div>
    </div>

    <p style={{ textAlign: "center" }}>
      Las computadoras almacenan aproximaciones mediante una cantidad finita de
      bits.
    </p>
  </Board>
);

export const Pizarron9 = () => (
  <Board title="ERROR DE TRUNCAMIENTO">
    <div
      style={{
        ...boxStyle,
        fontFamily: "monospace",
        fontSize: "clamp(18px, 3vw, 27px)",
        lineHeight: 1.7,
      }}
    >
      e<sup>x</sup> = 1 + x + x²/2! + x³/3! + ...
      <div style={arrowStyle}>↓</div>
      e<sup>x</sup> ≈ 1 + x + x²/2!
    </div>

    <div style={{ ...yellowBoxStyle, marginTop: 18 }}>
      El proceso infinito se sustituye por una cantidad finita de términos.
    </div>
  </Board>
);

export const Pizarron10 = () => (
  <Board title="REDONDEO VS. TRUNCAMIENTO">
    <Table
      headers={["Redondeo", "Truncamiento"]}
      rows={[
        ["Representación", "Método"],
        ["Computadora", "Modelo matemático"],
        ["Bits finitos", "Serie o proceso finito"],
        ["Almacenamiento", "Procedimiento"],
      ]}
    />
  </Board>
);

export const Pizarron11 = () => {
  const targets = [
    {
      title: "Alta exactitud / Alta precisión",
      dots: [["48%", "48%"], ["52%", "49%"], ["50%", "53%"]],
    },
    {
      title: "Baja exactitud / Alta precisión",
      dots: [["25%", "25%"], ["29%", "27%"], ["27%", "31%"]],
    },
    {
      title: "Alta exactitud / Baja precisión",
      dots: [["25%", "50%"], ["75%", "50%"], ["50%", "25%"]],
    },
    {
      title: "Baja exactitud / Baja precisión",
      dots: [["18%", "25%"], ["70%", "30%"], ["30%", "75%"]],
    },
  ];

  return (
    <Board title="ERRORES SISTEMÁTICOS Y ALEATORIOS">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 12,
        }}
      >
        {targets.map((target) => (
          <div key={target.title} style={boxStyle}>
            <Target dots={target.dots} />
            <div style={{ marginTop: 8, fontSize: 14 }}>{target.title}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 18 }}>
        <Table
          headers={["Sistemático", "Aleatorio"]}
          rows={[
            ["Sesgo", "Dispersión"],
            ["Desplazamiento constante", "Variación impredecible"],
            ["Afecta exactitud", "Afecta precisión"],
          ]}
        />
      </div>
    </Board>
  );
};

export const Pizarron12 = () => {
  const sources = [
    {
      icon: "👷",
      title: "Humano",
      text: "Lectura, transcripción, procedimiento.",
    },
    {
      icon: "📏",
      title: "Instrumental",
      text: "Calibración, resolución, desgaste.",
    },
    {
      icon: "📐",
      title: "Metodológico",
      text: "Método o modelo inadecuado.",
    },
  ];

  return (
    <Board title="ERRORES HUMANOS, INSTRUMENTALES Y METODOLÓGICOS">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12,
        }}
      >
        {sources.map((source) => (
          <div key={source.title} style={boxStyle}>
            <div style={{ fontSize: 34 }}>{source.icon}</div>
            <h2 style={{ color: "#fde68a", fontSize: 20 }}>
              {source.title}
            </h2>
            <p style={{ fontSize: 14 }}>{source.text}</p>
          </div>
        ))}
      </div>

      <div style={{ ...yellowBoxStyle, marginTop: 18 }}>
        Muchos errores de ingeniería no son exclusivamente matemáticos.
      </div>
    </Board>
  );
};

export const Pizarron13 = () => (
  <Board title="ERROR DE MODELADO">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 14,
      }}
    >
      <div style={boxStyle}>
        <div style={{ fontSize: 36 }}>⬇️</div>
        <h2 style={{ color: "#fde68a" }}>Sin resistencia del aire</h2>
        <div style={{ fontFamily: "monospace" }}>a = g</div>
        <p>Modelo simplificado.</p>
      </div>

      <div style={boxStyle}>
        <div style={{ fontSize: 36 }}>🍃⬇️</div>
        <h2 style={{ color: "#fde68a" }}>Con resistencia del aire</h2>
        <div style={{ fontFamily: "monospace" }}>
          m·a = m·g − F<sub>aire</sub>
        </div>
        <p>Modelo más completo.</p>
      </div>
    </div>

    <div style={{ ...yellowBoxStyle, marginTop: 18 }}>
      Todo modelo simplifica la realidad y puede introducir error.
    </div>
  </Board>
);

export const Pizarron14 = () => (
  <Board title="PROPAGACIÓN DE ERRORES">
    <Flow
      items={[
        "Dato con error",
        "Operación",
        "Resultado",
        "Nueva operación",
        "Resultado final",
      ]}
    />

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 14,
        flexWrap: "wrap",
        marginTop: 20,
      }}
    >
      {["±0.01", "±0.03", "±0.05", "±0.08"].map((error) => (
        <div key={error} style={{ ...yellowBoxStyle, minWidth: 100 }}>
          {error}
        </div>
      ))}
    </div>

    <p style={{ textAlign: "center" }}>
      Cada cálculo hereda y puede transformar parte del error anterior.
    </p>
  </Board>
);

export const Pizarron15 = () => (
  <Board title="SENSIBILIDAD">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 14,
      }}
    >
      <div style={boxStyle}>
        <h2 style={{ color: "#fde68a" }}>Función poco inclinada</h2>
        <svg viewBox="0 0 220 140" style={{ width: "100%" }}>
          <line x1="25" y1="115" x2="205" y2="115" stroke="white" />
          <line x1="25" y1="115" x2="25" y2="15" stroke="white" />
          <line
            x1="35"
            y1="95"
            x2="195"
            y2="55"
            stroke="#fde68a"
            strokeWidth="4"
          />
        </svg>
        Pequeño cambio → cambio pequeño
      </div>

      <div style={boxStyle}>
        <h2 style={{ color: "#fde68a" }}>Función muy inclinada</h2>
        <svg viewBox="0 0 220 140" style={{ width: "100%" }}>
          <line x1="25" y1="115" x2="205" y2="115" stroke="white" />
          <line x1="25" y1="115" x2="25" y2="15" stroke="white" />
          <line
            x1="75"
            y1="110"
            x2="125"
            y2="20"
            stroke="#fde68a"
            strokeWidth="4"
          />
        </svg>
        Pequeño cambio → cambio grande
      </div>
    </div>
  </Board>
);

export const Pizarron16 = () => (
  <Board title="TOLERANCIA Y CRITERIO DE PARADA">
    <Flow
      vertical
      items={[
        "Iteración",
        "Calcular error",
        "¿Error < ε?",
        "Sí",
        "Detener",
      ]}
    />

    <div style={{ ...yellowBoxStyle, marginTop: 18 }}>
      ε representa el nivel de error considerado aceptable.
    </div>
  </Board>
);

export const Pizarron17 = () => (
  <Board title="RESIDUO, CONVERGENCIA Y ESTABILIDAD">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 12,
      }}
    >
      {[
        ["Residuo", "Qué tanto satisface la ecuación."],
        ["Convergencia", "Las iteraciones se acercan."],
        ["Estabilidad", "Los errores no crecen sin control."],
      ].map(([title, text]) => (
        <div key={title} style={boxStyle}>
          <h2 style={{ color: "#fde68a", fontSize: 19 }}>{title}</h2>
          <p style={{ fontSize: 14 }}>{text}</p>
        </div>
      ))}
    </div>

    <svg
      viewBox="0 0 600 190"
      style={{ width: "100%", maxWidth: 680, margin: "18px auto 0" }}
    >
      <line x1="45" y1="155" x2="565" y2="155" stroke="white" />
      <line x1="45" y1="155" x2="45" y2="20" stroke="white" />
      <line
        x1="45"
        y1="55"
        x2="565"
        y2="55"
        stroke="#fde68a"
        strokeDasharray="8 7"
      />
      {[
        [90, 135],
        [170, 105],
        [250, 82],
        [330, 68],
        [410, 60],
        [500, 56],
      ].map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r="7" fill="#bfdbfe" />
      ))}
    </svg>

    <div style={{ ...yellowBoxStyle, marginTop: 12 }}>
      Residuo pequeño no siempre significa error pequeño.
    </div>
  </Board>
);

export const Pizarron18 = () => {
  const branches = [
    ["📏", "Medición"],
    ["∑", "Matemáticos"],
    ["💻", "Computacionales"],
    ["🧪", "Experimentales"],
  ];

  return (
    <Board title="CLASIFICACIÓN GENERAL DE LOS ERRORES">
      <div
        style={{
          width: "min(230px, 75%)",
          margin: "0 auto",
          ...yellowBoxStyle,
          fontSize: 25,
        }}
      >
        ERRORES
      </div>

      <div style={{ ...arrowStyle, margin: "8px 0" }}>↓</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 12,
        }}
      >
        {branches.map(([icon, title]) => (
          <div key={title} style={boxStyle}>
            <div style={{ fontSize: 30 }}>{icon}</div>
            <div style={{ color: "#fde68a", marginTop: 6 }}>{title}</div>
          </div>
        ))}
      </div>

      <p style={{ textAlign: "center" }}>
        Distintos tipos de error pueden coexistir dentro del mismo problema.
      </p>
    </Board>
  );
};

export const Pizarron19 = () => {
  const stages = [
    ["📏", "Medición", "Instrumental y humano"],
    ["📋", "Datos", "Incertidumbre"],
    ["⚙️", "Modelo", "Modelado"],
    ["∑", "Algoritmo", "Truncamiento"],
    ["💻", "Computadora", "Redondeo"],
    ["📊", "Resultado", "Propagación"],
  ];

  return (
    <Board title="CASO INTEGRADOR">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          flexWrap: "wrap",
          gap: 7,
        }}
      >
        {stages.map(([icon, stage, error], index) => (
          <div key={stage} style={{ display: "contents" }}>
            <div style={{ ...boxStyle, minWidth: 115, maxWidth: 145 }}>
              <div style={{ fontSize: 27 }}>{icon}</div>
              <strong style={{ color: "#fde68a" }}>{stage}</strong>
              <div style={{ marginTop: 6, fontSize: 12 }}>{error}</div>
            </div>

            {index < stages.length - 1 && (
              <div style={arrowStyle}>→</div>
            )}
          </div>
        ))}
      </div>

      <div style={{ ...yellowBoxStyle, marginTop: 20 }}>
        Cada etapa del proceso puede agregar, amplificar o transformar errores.
      </div>
    </Board>
  );
};

export const Pizarron20 = () => {
  const magnitude = [
    "Absoluto",
    "Relativo",
    "Porcentual",
    "Verdadero",
    "Aproximado",
  ];

  const origin = [
    "Redondeo",
    "Truncamiento",
    "Sistemático",
    "Aleatorio",
    "Humano",
    "Instrumental",
    "Metodológico",
    "Modelado",
  ];

  const effect = [
    "Exactitud",
    "Precisión",
    "Convergencia",
    "Estabilidad",
  ];

  return (
    <Board title="MAPA GENERAL DEL ERROR">
      <div
        style={{
          width: "min(220px, 70%)",
          margin: "0 auto",
          ...yellowBoxStyle,
          fontSize: 26,
        }}
      >
        ERROR
      </div>

      <div style={{ ...arrowStyle, margin: "8px 0" }}>↓</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12,
        }}
      >
        {[
          ["Magnitud", magnitude],
          ["Origen", origin],
          ["Efecto", effect],
        ].map(([heading, items]) => (
          <div key={heading} style={boxStyle}>
            <h2 style={{ color: "#fde68a", fontSize: 20 }}>
              {heading}
            </h2>

            {items.map((item) => (
              <div
                key={item}
                style={{
                  padding: "4px 2px",
                  fontSize: "clamp(12px, 1.7vw, 15px)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <Flow
          items={[
            "📏 Medición",
            "Datos",
            "⚙️ Modelo",
            "Método numérico",
            "💻 Computadora",
            "📊 Resultado",
            "Análisis del error",
          ]}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(150px, .7fr) repeat(2, minmax(0, 1fr))",
          gap: 10,
          marginTop: 18,
          alignItems: "center",
        }}
      >
        <div style={yellowBoxStyle}>¿Aceptable?</div>
        <div style={boxStyle}>✔ Sí → Conclusión</div>
        <div style={boxStyle}>✖ No → Revisar datos, modelo o método</div>
      </div>
    </Board>
  );
};