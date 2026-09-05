const boardStyle = {
  boxSizing: "border-box",
  width: "100%",
  maxWidth: 940,
  margin: "0 auto",
  padding: "18px clamp(12px, 3vw, 26px)",
  overflow: "hidden",
  color: "#f8fafc",
  background:
    "radial-gradient(circle at center, #28634d 0%, #174737 58%, #10382d 100%)",
  border: "10px solid #6f4e37",
  borderRadius: 12,
  boxShadow: "inset 0 0 28px rgba(0,0,0,.35)",
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
  border: "2px solid rgba(255,255,255,.82)",
  borderRadius: 8,
  overflowWrap: "anywhere",
};

const highlightStyle = {
  ...boxStyle,
  border: "3px solid #fde68a",
};

const arrowStyle = {
  color: "#fde68a",
  fontSize: 24,
  lineHeight: 1,
  textAlign: "center",
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
        <div
          style={{
            ...boxStyle,
            minWidth: vertical ? 190 : 115,
            maxWidth: vertical ? 270 : 175,
          }}
        >
          {item}
        </div>

        {index < items.length - 1 && (
          <div style={arrowStyle}>{vertical ? "↓" : "→"}</div>
        )}
      </div>
    ))}
  </div>
);

const DataTable = ({ headers, rows, columns }) => (
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
          minWidth: 0,
          padding: 9,
          color: "#fde68a",
          textAlign: "center",
          fontWeight: 700,
          borderRight: "2px solid #f8fafc",
          borderBottom: "2px solid #f8fafc",
          overflowWrap: "anywhere",
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

const LineChart = ({
  descending = false,
  question = true,
  labels = [],
  curved = false,
}) => (
  <svg
    viewBox="0 0 500 300"
    style={{
      display: "block",
      width: "100%",
      maxWidth: 520,
      margin: "0 auto",
    }}
  >
    <line x1="55" y1="250" x2="460" y2="250" stroke="white" strokeWidth="3" />
    <line x1="55" y1="250" x2="55" y2="35" stroke="white" strokeWidth="3" />

    {curved ? (
      <>
        <path
          d="M105 215 Q250 55 405 95"
          fill="none"
          stroke="#bfdbfe"
          strokeWidth="5"
        />
        <line
          x1="105"
          y1="215"
          x2="405"
          y2="95"
          stroke="#fde68a"
          strokeWidth="5"
        />
      </>
    ) : (
      <line
        x1="110"
        y1={descending ? 75 : 215}
        x2="405"
        y2={descending ? 215 : 65}
        stroke="#fde68a"
        strokeWidth="5"
      />
    )}

    <circle
      cx="110"
      cy={descending ? 75 : 215}
      r="9"
      fill="#bfdbfe"
      stroke="white"
      strokeWidth="2"
    />
    <circle
      cx="405"
      cy={descending ? 215 : 65}
      r="9"
      fill="#bfdbfe"
      stroke="white"
      strokeWidth="2"
    />

    {question && !curved && (
      <>
        <circle
          cx="258"
          cy="140"
          r="10"
          fill="#fca5a5"
          stroke="white"
          strokeWidth="2"
        />
        <text
          x="275"
          y="135"
          fill="#fca5a5"
          fontSize="26"
          fontFamily="sans-serif"
        >
          ?
        </text>
      </>
    )}

    {labels.map(({ x, y, text }) => (
      <text
        key={text}
        x={x}
        y={y}
        fill="white"
        fontSize="17"
        fontFamily="sans-serif"
      >
        {text}
      </text>
    ))}
  </svg>
);

export const Pizarron1 = () => (
  <Board title="INTERPOLACIÓN LINEAL">
    <LineChart
      labels={[
        { x: 70, y: 235, text: "Dato conocido" },
        { x: 355, y: 48, text: "Dato conocido" },
      ]}
    />

    <div style={{ ...highlightStyle, marginTop: 12 }}>
      <strong  style={{ color: "#fde68a" }}>
        Interpolar = estimar un valor dentro de un intervalo conocido.
      </strong>
    </div>

    <div style={{ marginTop: 18 }}>
      <Flow items={["Datos conocidos", "Recta", "Valor estimado"]} />
    </div>
  </Board>
);

export const Pizarron2 = () => (
  <Board title="INTERPOLACIÓN VS. EXTRAPOLACIÓN">
    <svg
      viewBox="0 0 760 290"
      style={{ display: "block", width: "100%", margin: "0 auto" }}
    >
      <rect
        x="230"
        y="55"
        width="310"
        height="155"
        fill="rgba(134,239,172,.13)"
      />
      <rect
        x="65"
        y="55"
        width="165"
        height="155"
        fill="rgba(252,165,165,.12)"
      />
      <rect
        x="540"
        y="55"
        width="155"
        height="155"
        fill="rgba(252,165,165,.12)"
      />

      <line x1="70" y1="210" x2="700" y2="210" stroke="white" strokeWidth="3" />
      <line
        x1="175"
        y1="165"
        x2="610"
        y2="75"
        stroke="#fde68a"
        strokeWidth="5"
      />

      <circle cx="230" cy="153" r="9" fill="#bfdbfe" />
      <circle cx="540" cy="90" r="9" fill="#bfdbfe" />

      <text x="90" y="245" fill="#fca5a5" fontSize="22">
        Extrapolación
      </text>
      <text x="310" y="245" fill="#86efac" fontSize="22">
        Interpolación
      </text>
      <text x="565" y="245" fill="#fca5a5" fontSize="22">
        Extrapolación
      </text>
    </svg>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 12,
      }}
    >
      <div style={{ ...boxStyle, borderColor: "#86efac" }}>
        Dentro del intervalo → mayor confiabilidad
      </div>
      <div style={{ ...boxStyle, borderColor: "#fca5a5" }}>
        Fuera del intervalo → mayor incertidumbre
      </div>
    </div>
  </Board>
);

export const Pizarron3 = () => (
  <Board title="PENDIENTE Y TASA DE CAMBIO">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 18,
        alignItems: "center",
      }}
    >
      <svg viewBox="0 0 480 300" style={{ width: "100%" }}>
        <line x1="55" y1="250" x2="445" y2="250" stroke="white" strokeWidth="3" />
        <line x1="55" y1="250" x2="55" y2="35" stroke="white" strokeWidth="3" />
        <line
          x1="115"
          y1="220"
          x2="390"
          y2="65"
          stroke="#fde68a"
          strokeWidth="5"
        />

        <line
          x1="115"
          y1="220"
          x2="390"
          y2="220"
          stroke="#bfdbfe"
          strokeWidth="4"
        />
        <line
          x1="390"
          y1="220"
          x2="390"
          y2="65"
          stroke="#fca5a5"
          strokeWidth="4"
        />

        <circle cx="115" cy="220" r="8" fill="#bfdbfe" />
        <circle cx="390" cy="65" r="8" fill="#bfdbfe" />

        <text x="80" y="242" fill="white" fontSize="17">
          (x₀,y₀)
        </text>
        <text x="365" y="48" fill="white" fontSize="17">
          (x₁,y₁)
        </text>
        <text x="230" y="244" fill="#bfdbfe" fontSize="18">
          Δx
        </text>
        <text x="400" y="150" fill="#fca5a5" fontSize="18">
          Δy
        </text>
      </svg>

      <div>
        <div
          style={{
            ...highlightStyle,
            fontFamily: "monospace",
            fontSize: "clamp(19px, 3vw, 26px)",
          }}
        >
          m = Δy / Δx
        </div>

        <div
          style={{
            ...boxStyle,
            marginTop: 12,
            fontFamily: "monospace",
            fontSize: "clamp(16px, 2.4vw, 21px)",
          }}
        >
          m = (y₁ − y₀) / (x₁ − x₀)
        </div>

        <p style={{ textAlign: "center" }}>
          Pendiente = cambio vertical por unidad de cambio horizontal.
        </p>
      </div>
    </div>
  </Board>
);

export const Pizarron4 = () => (
  <Board title="DERIVACIÓN DE LA FÓRMULA">
    <Flow
      vertical
      items={[
        "y − y₀ = m(x − x₀)",
        "m = (y₁ − y₀) / (x₁ − x₀)",
        "Sustituir la pendiente",
        "y = y₀ + [(y₁ − y₀)/(x₁ − x₀)](x − x₀)",
      ]}
    />

    <div style={{ ...highlightStyle, marginTop: 18 }}>
      La fórmula de interpolación lineal proviene directamente de la ecuación
      punto-pendiente.
    </div>
  </Board>
);

export const Pizarron5 = () => (
  <Board title="FACTOR DE INTERPOLACIÓN">
    <div
      style={{
        ...highlightStyle,
        maxWidth: 400,
        margin: "0 auto 20px",
        fontFamily: "monospace",
        fontSize: "clamp(19px, 3vw, 26px)",
      }}
    >
      t = (x − x₀) / (x₁ − x₀)
    </div>

    <div
      style={{
        position: "relative",
        maxWidth: 720,
        height: 95,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "5%",
          right: "5%",
          top: 40,
          height: 7,
          background: "#f8fafc",
          borderRadius: 5,
        }}
      />

      {[0, 25, 50, 75, 100].map((percent) => (
        <div
          key={percent}
          style={{
            position: "absolute",
            left: `${5 + percent * 0.9}%`,
            top: 28,
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              margin: "0 auto 8px",
              background: percent === 50 ? "#fca5a5" : "#fde68a",
              border: "2px solid white",
              borderRadius: "50%",
            }}
          />
          {percent}%
        </div>
      ))}
    </div>

    <div
      style={{
        ...boxStyle,
        maxWidth: 480,
        margin: "16px auto 0",
        fontFamily: "monospace",
        fontSize: "clamp(17px, 2.5vw, 22px)",
      }}
    >
      y = y₀ + t(y₁ − y₀)
    </div>

    <p style={{ textAlign: "center", marginBottom: 0 }}>
      El factor t indica qué fracción del intervalo se ha recorrido.
    </p>
  </Board>
);

export const Pizarron6 = () => (
  <Board title="PROCEDIMIENTO GENERAL">
    <Flow
      vertical
      items={[
        "Identificar datos",
        "Verificar el intervalo",
        "Calcular la pendiente",
        "Calcular el incremento",
        "Obtener el resultado",
        "✓ Verificar unidades",
      ]}
    />

    <div style={{ ...highlightStyle, marginTop: 18 }}>
      Mantener siempre la correspondencia correcta entre (x₀,y₀) y (x₁,y₁).
    </div>
  </Board>
);

export const Pizarron7 = () => (
  <Board title="EJEMPLO BÁSICO">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 18,
      }}
    >
      <div
        style={{
          ...boxStyle,
          textAlign: "left",
          fontFamily: "monospace",
          fontSize: "clamp(15px, 2vw, 18px)",
          lineHeight: 1.7,
        }}
      >
        Datos:
        <br />
        (2,10), (6,30)
        <br />
        x = 4
        <br />
        <br />
        m = (30−10)/(6−2)
        <br />
        m = 5
        <br />
        <br />
        y = 10 + 5(4−2)
        <br />
        <strong style={{ color: "#fde68a", fontSize: 22 }}>y = 20</strong>
      </div>

      <LineChart
        question={false}
        labels={[
          { x: 75, y: 235, text: "(2,10)" },
          { x: 355, y: 48, text: "(6,30)" },
          { x: 265, y: 135, text: "(4,20)" },
        ]}
      />
    </div>
  </Board>
);

export const Pizarron8 = () => (
  <Board title="INTERPOLACIÓN EN TABLAS TÉCNICAS">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(230px,.8fr) minmax(0,1.2fr)",
        gap: 18,
        alignItems: "start",
      }}
    >
      <DataTable
        headers={["T (°C)", "ρ (kg/m³)"]}
        rows={[
          ["20", "998.2"],
          ["30", "995.7"],
        ]}
      />

      <div
        style={{
          ...boxStyle,
          textAlign: "left",
          fontFamily: "monospace",
          fontSize: "clamp(14px, 1.9vw, 17px)",
          lineHeight: 1.65,
        }}
      >
        Estimar para T = 24 °C
        <br />
        <br />
        t = (24−20)/(30−20)
        <br />
        t = 0.4
        <br />
        <br />
        ρ = 998.2 + 0.4(995.7−998.2)
        <br />
        ρ = 998.2 − 1.0
        <br />
        <strong style={{ color: "#fde68a", fontSize: 20 }}>
          ρ ≈ 997.2 kg/m³
        </strong>
      </div>
    </div>

    <div style={{ ...highlightStyle, marginTop: 18 }}>
      La pendiente negativa indica que la densidad disminuye al aumentar la
      temperatura.
    </div>
  </Board>
);

export const Pizarron9 = () => (
  <Board title="PENDIENTE NEGATIVA">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        gap: 18,
        alignItems: "center",
      }}
    >
      <LineChart
        descending
        question={false}
        labels={[
          { x: 65, y: 58, text: "100 °C → 500 kPa" },
          { x: 320, y: 238, text: "140 °C → 420 kPa" },
          { x: 245, y: 135, text: "125 °C → 450 kPa" },
        ]}
      />

      <div>
        <div
          style={{
            ...boxStyle,
            fontFamily: "monospace",
            fontSize: "clamp(15px, 2vw, 19px)",
          }}
        >
          m = (420 − 500) / (140 − 100)
          <br />
          <br />
          m = −2 kPa/°C
        </div>

        <div style={{ ...highlightStyle, marginTop: 14 }}>
          El signo negativo representa la dirección de disminución y debe
          conservarse.
        </div>
      </div>
    </div>
  </Board>
);

export const Pizarron10 = () => (
  <Board title="INTERPRETACIÓN PORCENTUAL">
    <div
      style={{
        display: "grid",
        gap: 28,
        maxWidth: 760,
        margin: "0 auto",
      }}
    >
      {[
        {
          start: "50",
          middle: "60",
          end: "90",
          label: "Variable x",
          position: "25%",
        },
        {
          start: "200",
          middle: "225",
          end: "300",
          label: "Variable y",
          position: "25%",
        },
      ].map((bar) => (
        <div key={bar.label}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginBottom: 6,
              textAlign: "center",
              fontFamily: "monospace",
              fontSize: 19,
            }}
          >
            <span>{bar.start}</span>
            <span>{bar.middle}</span>
            <span>{bar.end}</span>
          </div>

          <div
            style={{
              position: "relative",
              height: 30,
              borderTop: "6px solid #f8fafc",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: bar.position,
                top: -13,
                width: 20,
                height: 20,
                transform: "translateX(-50%)",
                background: "#fca5a5",
                border: "2px solid white",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      ))}
    </div>

    <div style={{ ...highlightStyle, marginTop: 18 }}>
      25% recorrido en x → 25% del incremento total en y.
    </div>
  </Board>
);

export const Pizarron11 = () => (
  <Board title="ERROR DE INTERPOLACIÓN LINEAL">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 18,
        alignItems: "center",
      }}
    >
      <LineChart curved question={false} />

      <div>
        <div
          style={{
            ...highlightStyle,
            fontFamily: "monospace",
            fontSize: "clamp(17px, 2.5vw, 22px)",
          }}
        >
          E(x) = f(x) − P₁(x)
        </div>

        <div
          style={{
            ...boxStyle,
            marginTop: 13,
            fontFamily: "monospace",
            fontSize: "clamp(14px, 2vw, 18px)",
            lineHeight: 1.5,
          }}
        >
          E(x) =
          <br />
          [f''(ξ)/2](x−x₀)(x−x₁)
        </div>

        <p style={{ textAlign: "center" }}>
          Si f''(x) = 0, la función es lineal y la interpolación es exacta.
        </p>
      </div>
    </div>
  </Board>
);

export const Pizarron12 = () => {
  const advantages = [
    "Solo requiere dos puntos",
    "Fácil de aplicar",
    "Rápida",
    "Bajo costo computacional",
    "Exacta en los extremos",
  ];

  const limitations = [
    "No representa bien curvas",
    "Pierde calidad en intervalos grandes",
    "No utiliza otros datos",
    "Falla con cambios bruscos",
    "Es solo una aproximación local",
  ];

  return (
    <Board title="VENTAJAS Y LIMITACIONES">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 16,
        }}
      >
        <div style={{ ...boxStyle, borderColor: "#86efac" }}>
          <h2 style={{ marginTop: 0, color: "#86efac" }}>✔ Ventajas</h2>
          {advantages.map((item) => (
            <div key={item} style={{ padding: "5px 0" }}>
              ✔ {item}
            </div>
          ))}
        </div>

        <div style={{ ...boxStyle, borderColor: "#fca5a5" }}>
          <h2 style={{ marginTop: 0, color: "#fca5a5" }}>✖ Limitaciones</h2>
          {limitations.map((item) => (
            <div key={item} style={{ padding: "5px 0" }}>
              ✖ {item}
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...highlightStyle, marginTop: 18 }}>
        La simplicidad del método es también su principal limitación.
      </div>
    </Board>
  );
};

export const Pizarron13 = () => {
  const applications = [
    ["⚙️", "Mecánica", "Tablas de propiedades y rendimiento"],
    ["🌉", "Civil", "Perfiles, cargas y materiales"],
    ["⚡", "Eléctrica", "Sensores y curvas de circuitos"],
    ["🧪", "Química", "Propiedades termodinámicas"],
    ["📡", "Instrumentación", "Conversión de señales"],
  ];

  return (
    <Board title="APLICACIONES EN INGENIERÍA">
      <div
        style={{
          ...highlightStyle,
          width: "min(260px, 75%)",
          margin: "0 auto",
          fontSize: 22,
        }}
      >
        INTERPOLACIÓN LINEAL
      </div>

      <div style={{ ...arrowStyle, margin: "9px 0" }}>↓</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 11,
        }}
      >
        {applications.map(([icon, area, example]) => (
          <div key={area} style={boxStyle}>
            <div style={{ fontSize: 31 }}>{icon}</div>
            <strong style={{ color: "#fde68a" }}>{area}</strong>
            <div style={{ marginTop: 7, fontSize: 13 }}>{example}</div>
          </div>
        ))}
      </div>
    </Board>
  );
};

export const Pizarron14 = () => (
  <Board title="IMPLEMENTACIÓN COMPUTACIONAL">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0,1.3fr) minmax(220px,.7fr)",
        gap: 18,
        alignItems: "start",
      }}
    >
      <Flow
        vertical
        items={[
          "💻 Leer datos",
          "Ordenar puntos",
          "◇ ¿x dentro del intervalo?",
          "Sí",
          "Calcular t",
          "Calcular y",
          "Mostrar resultado",
        ]}
      />

      <aside style={highlightStyle}>
        <h2 style={{ marginTop: 0, color: "#fde68a", fontSize: 20 }}>
          Verificar
        </h2>
        <div style={{ textAlign: "left", lineHeight: 1.7 }}>
          • x₁ ≠ x₀
          <br />
          • Datos ordenados
          <br />
          • Unidades coherentes
          <br />
          • Posible extrapolación
          <br />
          • Resultado finito
        </div>
      </aside>
    </div>
  </Board>
);

export const Pizarron15 = () => (
  <Board title="EJERCICIO INTEGRADOR">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(230px,.8fr) minmax(0,1.2fr)",
        gap: 18,
      }}
    >
      <div>
        <DataTable
          headers={["Velocidad", "Consumo"]}
          rows={[
            ["60 km/h", "5.2 L/100 km"],
            ["100 km/h", "7.6 L/100 km"],
          ]}
        />

        <div
          style={{
            ...boxStyle,
            marginTop: 12,
            fontFamily: "monospace",
          }}
        >
          Estimar a 80 km/h
        </div>
      </div>

      <div
        style={{
          ...boxStyle,
          textAlign: "left",
          fontFamily: "monospace",
          fontSize: "clamp(14px, 1.9vw, 17px)",
          lineHeight: 1.7,
        }}
      >
        t = (80−60)/(100−60)
        <br />
        t = 0.5
        <br />
        <br />
        y = 5.2 + 0.5(7.6−5.2)
        <br />
        y = 5.2 + 1.2
        <br />
        <strong style={{ color: "#fde68a", fontSize: 21 }}>
          y = 6.4 L/100 km
        </strong>
      </div>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        gap: 10,
        marginTop: 18,
      }}
    >
      {[
        "¿Está dentro del intervalo?",
        "¿El signo de la pendiente es correcto?",
        "¿Las unidades coinciden?",
        "¿El resultado queda entre y₀ y y₁?",
      ].map((question) => (
        <div key={question} style={highlightStyle}>
          ✓ {question}
        </div>
      ))}
    </div>
  </Board>
);

export const Pizarron16 = () => {
  const ideas = [
    "Solo se aplica dentro del intervalo conocido.",
    "Se basa en una tasa de cambio constante.",
    "La fórmula proviene de la ecuación de la recta.",
    "La calidad depende de la linealidad y del tamaño del intervalo.",
  ];

  return (
    <Board title="MAPA GENERAL DE INTERPOLACIÓN LINEAL">
      <div
        style={{
          ...highlightStyle,
          width: "min(290px, 80%)",
          margin: "0 auto",
          fontSize: 23,
        }}
      >
        INTERPOLACIÓN LINEAL
      </div>

      <div style={{ ...arrowStyle, margin: "8px 0" }}>↓</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12,
        }}
      >
        <div style={boxStyle}>
          <h2 style={{ color: "#fde68a", fontSize: 19 }}>Concepto</h2>
          Dos puntos
          <br />↓<br />
          Recta
          <br />↓<br />
          Factor t
          <br />↓<br />
          Valor intermedio
        </div>

        <div style={boxStyle}>
          <h2 style={{ color: "#fde68a", fontSize: 19 }}>Procedimiento</h2>
          Identificar datos
          <br />↓<br />
          Verificar intervalo
          <br />↓<br />
          Calcular pendiente
          <br />↓<br />
          Sustituir fórmula
          <br />↓<br />
          Validar resultado
        </div>

        <div style={boxStyle}>
          <h2 style={{ color: "#fde68a", fontSize: 19 }}>Aplicaciones</h2>
          📋 Tablas
          <br />
          📡 Sensores
          <br />
          🧪 Propiedades
          <br />
          ⚙️ Ingeniería
          <br />
          💻 Computación
        </div>
      </div>

      <div style={{ ...arrowStyle, margin: "10px 0" }}>↓</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 12,
        }}
      >
        <div style={highlightStyle}>
          <strong  style={{ color: "#fde68a" }}>Error de interpolación</strong>
          <br />
          Depende de la curvatura de la función.
        </div>

        <div style={highlightStyle}>
          <strong  style={{ color: "#fde68a" }}>Intervalos pequeños</strong>
          <br />
          Generalmente producen mayor confiabilidad.
        </div>
      </div>

      <aside
        style={{
          ...boxStyle,
          marginTop: 18,
          textAlign: "left",
        }}
      >
        <h2
          style={{
            margin: "0 0 10px",
            color: "#fde68a",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Ideas clave
        </h2>

        <ul
          style={{
            margin: 0,
            paddingLeft: 22,
            lineHeight: 1.55,
            fontSize: "clamp(13px, 1.8vw, 16px)",
          }}
        >
          {ideas.map((idea) => (
            <li key={idea}>{idea}</li>
          ))}
        </ul>
      </aside>
    </Board>
  );
};