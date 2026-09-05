const interpolationBoardStyle = {
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

const interpolationTitleStyle = {
  margin: "0 0 18px",
  color: "#fde68a",
  textAlign: "center",
  fontSize: "clamp(22px, 4vw, 36px)",
};

const interpolationBoxStyle = {
  boxSizing: "border-box",
  minWidth: 0,
  padding: 12,
  textAlign: "center",
  border: "2px solid rgba(255,255,255,.82)",
  borderRadius: 8,
  overflowWrap: "anywhere",
};

const interpolationHighlightStyle = {
  ...interpolationBoxStyle,
  border: "3px solid #fde68a",
};

const InterpolationBoard = ({ title, children }) => (
  <section style={interpolationBoardStyle}>
    <h1 style={interpolationTitleStyle}>{title}</h1>
    {children}
  </section>
);

const InterpolationFlow = ({ items, vertical = false }) => (
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
            ...interpolationBoxStyle,
            minWidth: vertical ? 190 : 115,
            maxWidth: vertical ? 260 : 170,
          }}
        >
          {item}
        </div>

        {index < items.length - 1 && (
          <div
            style={{
              color: "#fde68a",
              fontSize: 24,
              lineHeight: 1,
            }}
          >
            {vertical ? "↓" : "→"}
          </div>
        )}
      </div>
    ))}
  </div>
);

const InterpolationTable = ({ headers, rows, columns }) => (
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

export const Pizarron1 = () => (
  <InterpolationBoard title="INTERPOLACIÓN">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 14,
        marginBottom: 18,
      }}
    >
      <div style={interpolationBoxStyle}>Datos conocidos</div>
      <div style={interpolationBoxStyle}>Valor buscado</div>
    </div>

    <svg
      viewBox="0 0 720 300"
      style={{
        display: "block",
        width: "100%",
        maxWidth: 760,
        margin: "0 auto",
      }}
    >
      <line x1="70" y1="250" x2="680" y2="250" stroke="white" strokeWidth="3" />
      <line x1="70" y1="250" x2="70" y2="35" stroke="white" strokeWidth="3" />

      <path
        d="M110 220 C190 190, 220 120, 300 150 S430 205, 500 115 S610 70, 650 55"
        fill="none"
        stroke="#fde68a"
        strokeWidth="5"
      />

      {[
        [120, 215],
        [280, 150],
        [500, 115],
        [645, 58],
      ].map(([x, y], index) => (
        <circle
          key={index}
          cx={x}
          cy={y}
          r="8"
          fill="#bfdbfe"
          stroke="white"
          strokeWidth="2"
        />
      ))}

      <circle
        cx="390"
        cy="172"
        r="10"
        fill="#fca5a5"
        stroke="white"
        strokeWidth="2"
      />
      <text
        x="407"
        y="165"
        fill="#fca5a5"
        fontSize="28"
        fontFamily="sans-serif"
      >
        ?
      </text>
    </svg>

    <div style={{ ...interpolationHighlightStyle, marginTop: 14 }}>
      Interpolar = estimar un valor dentro de un intervalo conocido.
    </div>

    <div style={{ marginTop: 18 }}>
      <InterpolationFlow
        items={["Datos", "Función interpolante", "Valor estimado"]}
      />
    </div>
  </InterpolationBoard>
);

export const Pizarron2 = () => (
  <InterpolationBoard title="DATOS DISCRETOS Y FUNCIÓN CONTINUA">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(220px, .8fr) minmax(0, 1.5fr)",
        gap: 18,
        alignItems: "center",
      }}
    >
      <InterpolationTable
        headers={["x", "y"]}
        rows={[
          ["1", "2"],
          ["2", "4"],
          ["3", "8"],
        ]}
      />

      <svg viewBox="0 0 480 300" style={{ width: "100%" }}>
        <line x1="55" y1="250" x2="445" y2="250" stroke="white" strokeWidth="3" />
        <line x1="55" y1="250" x2="55" y2="30" stroke="white" strokeWidth="3" />

        <path
          d="M110 220 C175 200, 215 170, 265 130 C315 90, 365 60, 415 40"
          fill="none"
          stroke="#fde68a"
          strokeWidth="5"
        />

        {[
          [130, 210],
          [250, 145],
          [390, 55],
        ].map(([x, y], index) => (
          <circle
            key={index}
            cx={x}
            cy={y}
            r="9"
            fill="#bfdbfe"
            stroke="white"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 12,
        marginTop: 18,
      }}
    >
      <div style={interpolationBoxStyle}>Experimento → puntos discretos</div>
      <div style={interpolationHighlightStyle}>
        Interpolación → función continua
      </div>
    </div>
  </InterpolationBoard>
);

export const Pizarron3 = () => (
  <InterpolationBoard title="INTERPOLACIÓN Y EXTRAPOLACIÓN">
    <svg
      viewBox="0 0 760 300"
      style={{
        width: "100%",
        maxWidth: 800,
        display: "block",
        margin: "0 auto",
      }}
    >
      <rect x="130" y="60" width="430" height="180" fill="rgba(134,239,172,.12)" />
      <rect x="560" y="60" width="150" height="180" fill="rgba(252,165,165,.13)" />

      <line x1="65" y1="240" x2="710" y2="240" stroke="white" strokeWidth="3" />
      <line x1="65" y1="240" x2="65" y2="35" stroke="white" strokeWidth="3" />

      <path
        d="M120 210 C220 160, 325 135, 430 105 S610 75, 690 55"
        fill="none"
        stroke="#fde68a"
        strokeWidth="5"
      />

      {[
        [170, 185],
        [330, 132],
        [515, 84],
      ].map(([x, y], index) => (
        <circle
          key={index}
          cx={x}
          cy={y}
          r="9"
          fill="#bfdbfe"
          stroke="white"
          strokeWidth="2"
        />
      ))}

      <text x="265" y="275" fill="#86efac" fontSize="24">
        Interpolación
      </text>
      <text x="585" y="275" fill="#fca5a5" fontSize="24">
        Extrapolación
      </text>
    </svg>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 12,
        marginTop: 10,
      }}
    >
      <div style={{ ...interpolationBoxStyle, borderColor: "#86efac" }}>
        Dentro del intervalo → mayor confiabilidad
      </div>
      <div style={{ ...interpolationBoxStyle, borderColor: "#fca5a5" }}>
        Fuera del intervalo → mayor incertidumbre
      </div>
    </div>
  </InterpolationBoard>
);

export const Pizarron4 = () => (
  <InterpolationBoard title="INTERPOLACIÓN LINEAL">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.2fr) minmax(230px, .8fr)",
        gap: 18,
        alignItems: "center",
      }}
    >
      <svg viewBox="0 0 480 280" style={{ width: "100%" }}>
        <line x1="55" y1="235" x2="445" y2="235" stroke="white" strokeWidth="3" />
        <line x1="55" y1="235" x2="55" y2="30" stroke="white" strokeWidth="3" />
        <line
          x1="120"
          y1="205"
          x2="395"
          y2="65"
          stroke="#fde68a"
          strokeWidth="5"
        />
        <circle cx="120" cy="205" r="9" fill="#bfdbfe" />
        <circle cx="395" cy="65" r="9" fill="#bfdbfe" />
        <text x="95" y="225" fill="white" fontSize="18">
          (x₀,y₀)
        </text>
        <text x="375" y="48" fill="white" fontSize="18">
          (x₁,y₁)
        </text>
      </svg>

      <div
        style={{
          ...interpolationHighlightStyle,
          fontFamily: "monospace",
          fontSize: "clamp(14px, 2.2vw, 19px)",
          lineHeight: 1.6,
        }}
      >
        P₁(x) = y₀ +
        <br />
        [(y₁ − y₀) / (x₁ − x₀)]
        <br />
        · (x − x₀)
      </div>
    </div>

    <p style={{ textAlign: "center", marginBottom: 0 }}>
      Entre dos datos se supone un comportamiento lineal.
    </p>
  </InterpolationBoard>
);

export const Pizarron5 = () => (
  <InterpolationBoard title="EJEMPLO DE INTERPOLACIÓN LINEAL">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        gap: 18,
      }}
    >
      <div
        style={{
          ...interpolationBoxStyle,
          fontFamily: "monospace",
          fontSize: "clamp(15px, 2vw, 18px)",
          lineHeight: 1.7,
          textAlign: "left",
        }}
      >
        Puntos:
        <br />
        (2, 10) y (6, 30)
        <br />
        <br />
        Estimar en x = 4
        <br />
        <br />
        P(4) = 10 +
        <br />
        [(30 − 10) / (6 − 2)](4 − 2)
        <br />
        <br />
        P(4) = 10 + 5(2)
        <br />
        <strong style={{ color: "#fde68a" }}>P(4) = 20</strong>
      </div>

      <svg viewBox="0 0 460 300" style={{ width: "100%" }}>
        <line x1="55" y1="250" x2="425" y2="250" stroke="white" strokeWidth="3" />
        <line x1="55" y1="250" x2="55" y2="30" stroke="white" strokeWidth="3" />
        <line
          x1="120"
          y1="210"
          x2="375"
          y2="65"
          stroke="#fde68a"
          strokeWidth="5"
        />

        <circle cx="120" cy="210" r="8" fill="#bfdbfe" />
        <circle cx="375" cy="65" r="8" fill="#bfdbfe" />
        <circle
          cx="248"
          cy="138"
          r="10"
          fill="#fca5a5"
          stroke="white"
          strokeWidth="2"
        />

        <text x="92" y="230" fill="white" fontSize="18">
          (2,10)
        </text>
        <text x="345" y="48" fill="white" fontSize="18">
          (6,30)
        </text>
        <text x="263" y="132" fill="#fca5a5" fontSize="20">
          (4,20)
        </text>
      </svg>
    </div>
  </InterpolationBoard>
);

export const Pizarron6 = () => (
  <InterpolationBoard title="INTERPOLACIÓN POLINOMIAL">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 12,
      }}
    >
      {[
        ["2 puntos", "Recta", "M40 145 L190 45"],
        ["3 puntos", "Parábola", "M35 140 Q110 20 190 140"],
        ["4 puntos", "Cúbica", "M30 130 C75 30 130 165 195 45"],
      ].map(([points, type, path]) => (
        <div key={points} style={interpolationBoxStyle}>
          <strong style={{ color: "#fde68a" }}>{points}</strong>
          <svg viewBox="0 0 220 170" style={{ width: "100%" }}>
            <path
              d={path}
              fill="none"
              stroke="#fde68a"
              strokeWidth="5"
            />
          </svg>
          <div>{type}</div>
        </div>
      ))}
    </div>

    <div style={{ marginTop: 18 }}>
      <InterpolationFlow
        items={["Más puntos", "Mayor grado", "Mayor flexibilidad"]}
      />
    </div>

    <div
      style={{
        ...interpolationHighlightStyle,
        margin: "16px auto 0",
        maxWidth: 260,
        fontFamily: "monospace",
        fontSize: 22,
      }}
    >
      Pₙ(x)
    </div>
  </InterpolationBoard>
);

export const Pizarron7 = () => (
  <InterpolationBoard title="CONSTRUCCIÓN DEL POLINOMIO INTERPOLANTE">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 16,
      }}
    >
      <div style={interpolationBoxStyle}>
        <h2 style={{ color: "#fde68a", fontSize: 20 }}>Tres puntos</h2>
        (x₀, y₀)
        <br />
        (x₁, y₁)
        <br />
        (x₂, y₂)
      </div>

      <div
        style={{
          ...interpolationBoxStyle,
          fontFamily: "monospace",
          fontSize: "clamp(13px, 1.8vw, 16px)",
          lineHeight: 1.65,
        }}
      >
        a₀ + a₁x₀ + a₂x₀² = y₀
        <br />
        a₀ + a₁x₁ + a₂x₁² = y₁
        <br />
        a₀ + a₁x₂ + a₂x₂² = y₂
      </div>
    </div>

    <div style={{ marginTop: 18 }}>
      <InterpolationFlow
        items={["Tres puntos", "Tres ecuaciones", "Tres coeficientes"]}
      />
    </div>

    <div
      style={{
        ...interpolationHighlightStyle,
        marginTop: 16,
        fontFamily: "monospace",
      }}
    >
      P₂(x) = a₀ + a₁x + a₂x²
    </div>
  </InterpolationBoard>
);

export const Pizarron8 = () => (
  <InterpolationBoard title="MÉTODO DE LAGRANGE">
    <div
      style={{
        ...interpolationHighlightStyle,
        maxWidth: 420,
        margin: "0 auto 18px",
        fontFamily: "monospace",
        fontSize: "clamp(19px, 3vw, 27px)",
      }}
    >
      P(x) = Σ yᵢLᵢ(x)
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 12,
      }}
    >
      {["L₀(x)", "L₁(x)", "L₂(x)"].map((label, index) => (
        <div key={label} style={interpolationBoxStyle}>
          <strong style={{ color: "#fde68a", fontSize: 22 }}>{label}</strong>
          <div style={{ marginTop: 12 }}>
            Vale 1 en x<sub>{index}</sub>
          </div>
          <div>
            Vale 0 en los demás puntos
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 12,
        marginTop: 14,
        fontFamily: "monospace",
      }}
    >
      <div style={interpolationHighlightStyle}>[1, 0, 0]</div>
      <div style={interpolationHighlightStyle}>[0, 1, 0]</div>
      <div style={interpolationHighlightStyle}>[0, 0, 1]</div>
    </div>
  </InterpolationBoard>
);

export const Pizarron9 = () => (
  <InterpolationBoard title="EJEMPLO DE LAGRANGE">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 10,
        marginBottom: 18,
      }}
    >
      {["(1,1)", "(2,4)", "(3,9)"].map((point) => (
        <div
          key={point}
          style={{
            ...interpolationBoxStyle,
            fontFamily: "monospace",
            fontSize: 20,
          }}
        >
          {point}
        </div>
      ))}
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        gap: 10,
        fontFamily: "monospace",
        fontSize: "clamp(12px, 1.7vw, 15px)",
      }}
    >
      <div style={interpolationBoxStyle}>
        L₀(x) =
        <br />
        (x−2)(x−3) / [(1−2)(1−3)]
      </div>
      <div style={interpolationBoxStyle}>
        L₁(x) =
        <br />
        (x−1)(x−3) / [(2−1)(2−3)]
      </div>
      <div style={interpolationBoxStyle}>
        L₂(x) =
        <br />
        (x−1)(x−2) / [(3−1)(3−2)]
      </div>
    </div>

    <div
      style={{
        color: "#fde68a",
        textAlign: "center",
        fontSize: 27,
        margin: "12px 0",
      }}
    >
      ↓
    </div>

    <div
      style={{
        ...interpolationHighlightStyle,
        maxWidth: 320,
        margin: "0 auto",
        fontFamily: "monospace",
        fontSize: 24,
      }}
    >
      P(x) = x²
    </div>
  </InterpolationBoard>
);

export const Pizarron10 = () => (
  <InterpolationBoard title="MÉTODO DE NEWTON">
    <InterpolationFlow
      items={[
        "Punto nuevo",
        "Nueva diferencia",
        "Nuevo término",
        "Nuevo polinomio",
      ]}
    />

    <div
      style={{
        ...interpolationHighlightStyle,
        marginTop: 20,
        fontFamily: "monospace",
        fontSize: "clamp(14px, 2vw, 18px)",
        lineHeight: 1.6,
      }}
    >
      Pₙ(x) = a₀ + a₁(x−x₀) + a₂(x−x₀)(x−x₁) + ...
    </div>

    <p style={{ textAlign: "center", marginBottom: 0 }}>
      Newton construye el polinomio progresivamente y permite agregar nuevos
      datos con facilidad.
    </p>
  </InterpolationBoard>
);

export const Pizarron11 = () => (
  <InterpolationBoard title="DIFERENCIAS DIVIDIDAS">
    <InterpolationTable
      headers={[
        "x",
        "f(x)",
        "Primera diferencia",
        "Segunda diferencia",
      ]}
      rows={[
        ["x₀", "f[x₀]", "f[x₀,x₁]", "f[x₀,x₁,x₂]"],
        ["x₁", "f[x₁]", "f[x₁,x₂]", ""],
        ["x₂", "f[x₂]", "", ""],
      ]}
      columns="100px minmax(110px,1fr) minmax(150px,1.2fr) minmax(160px,1.2fr)"
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 10,
        marginTop: 18,
      }}
    >
      <div style={interpolationBoxStyle}>a₀ = f[x₀]</div>
      <div style={interpolationBoxStyle}>a₁ = f[x₀,x₁]</div>
      <div style={interpolationBoxStyle}>a₂ = f[x₀,x₁,x₂]</div>
    </div>

    <div style={{ ...interpolationHighlightStyle, marginTop: 16 }}>
      Cada columna genera un coeficiente del polinomio de Newton.
    </div>
  </InterpolationBoard>
);

export const Pizarron12 = () => (
  <InterpolationBoard title="DIFERENCIAS FINITAS">
    <div
      style={{
        ...interpolationHighlightStyle,
        maxWidth: 300,
        margin: "0 auto 16px",
        fontFamily: "monospace",
        fontSize: 22,
      }}
    >
      h = xᵢ₊₁ − xᵢ = constante
    </div>

    <InterpolationTable
      headers={["x", "y", "Δy", "Δ²y", "Δ³y"]}
      rows={[
        ["x₀", "y₀", "Δy₀", "Δ²y₀", "Δ³y₀"],
        ["x₁", "y₁", "Δy₁", "Δ²y₁", ""],
        ["x₂", "y₂", "Δy₂", "", ""],
        ["x₃", "y₃", "", "", ""],
      ]}
    />

    <p style={{ textAlign: "center", marginBottom: 0 }}>
      Este procedimiento requiere datos igualmente espaciados.
    </p>
  </InterpolationBoard>
);

export const Pizarron13 = () => (
  <InterpolationBoard title="SPLINES CÚBICOS">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 16,
      }}
    >
      <div style={interpolationBoxStyle}>
        <h2 style={{ color: "#fde68a", fontSize: 20 }}>Polinomio único</h2>
        <svg viewBox="0 0 300 170" style={{ width: "100%" }}>
          <path
            d="M20 130 C70 10 130 160 180 30 S250 90 285 20"
            fill="none"
            stroke="#fca5a5"
            strokeWidth="5"
          />
        </svg>
        Puede oscilar al aumentar el grado.
      </div>

      <div style={interpolationBoxStyle}>
        <h2 style={{ color: "#fde68a", fontSize: 20 }}>
          Polinomios por intervalos
        </h2>
        <svg viewBox="0 0 300 170" style={{ width: "100%" }}>
          <path
            d="M20 130 C55 100 70 85 100 90"
            fill="none"
            stroke="#fde68a"
            strokeWidth="5"
          />
          <path
            d="M100 90 C135 95 150 50 185 55"
            fill="none"
            stroke="#fde68a"
            strokeWidth="5"
          />
          <path
            d="M185 55 C220 60 240 35 285 25"
            fill="none"
            stroke="#fde68a"
            strokeWidth="5"
          />
        </svg>
        Una curva suave formada por varios polinomios cúbicos.
      </div>
    </div>

    <div style={{ ...interpolationHighlightStyle, marginTop: 18 }}>
      Cada intervalo tiene su propio polinomio y las uniones son suaves.
    </div>
  </InterpolationBoard>
);

export const Pizarron14 = () => (
  <InterpolationBoard title="ERROR DE INTERPOLACIÓN">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        gap: 16,
      }}
    >
      <div style={interpolationBoxStyle}>
        <h2 style={{ color: "#fde68a", fontSize: 20 }}>
          Función real e interpolante
        </h2>
        <svg viewBox="0 0 340 220" style={{ width: "100%" }}>
          <path
            d="M20 170 C85 80 145 140 205 70 S290 50 325 25"
            fill="none"
            stroke="#bfdbfe"
            strokeWidth="5"
          />
          <path
            d="M20 175 C80 95 145 120 205 82 S285 40 325 35"
            fill="none"
            stroke="#fde68a"
            strokeWidth="4"
            strokeDasharray="8 6"
          />
          <line
            x1="190"
            y1="75"
            x2="190"
            y2="98"
            stroke="#fca5a5"
            strokeWidth="4"
          />
          <text x="200" y="92" fill="#fca5a5" fontSize="18">
            error
          </text>
        </svg>
      </div>

      <div style={interpolationBoxStyle}>
        <h2 style={{ color: "#fde68a", fontSize: 20 }}>
          Fenómeno de Runge
        </h2>
        <svg viewBox="0 0 340 220" style={{ width: "100%" }}>
          <path
            d="M20 120 C45 10 80 215 115 90 S180 150 220 70 S290 210 325 20"
            fill="none"
            stroke="#fca5a5"
            strokeWidth="5"
          />
          {[45, 100, 160, 220, 280].map((x, index) => (
            <circle
              key={x}
              cx={x}
              cy={[95, 110, 100, 90, 105][index]}
              r="6"
              fill="#bfdbfe"
            />
          ))}
        </svg>
      </div>
    </div>

    <div style={{ ...interpolationHighlightStyle, marginTop: 18 }}>
      Un polinomio de mayor grado no siempre produce una mejor aproximación.
    </div>
  </InterpolationBoard>
);

export const Pizarron15 = () => (
  <InterpolationBoard title="INTERPOLACIÓN VS. AJUSTE DE CURVAS">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 16,
      }}
    >
      <div style={interpolationBoxStyle}>
        <h2 style={{ color: "#fde68a", fontSize: 20 }}>Interpolación</h2>
        <svg viewBox="0 0 320 200" style={{ width: "100%" }}>
          <path
            d="M25 160 C70 60 115 170 160 70 S250 155 295 45"
            fill="none"
            stroke="#fde68a"
            strokeWidth="5"
          />
          {[
            [35, 145],
            [95, 105],
            [160, 70],
            [225, 105],
            [290, 50],
          ].map(([x, y], index) => (
            <circle key={index} cx={x} cy={y} r="7" fill="#bfdbfe" />
          ))}
        </svg>
        La curva pasa por todos los puntos.
      </div>

      <div style={interpolationBoxStyle}>
        <h2 style={{ color: "#fde68a", fontSize: 20 }}>
          Regresión o ajuste
        </h2>
        <svg viewBox="0 0 320 200" style={{ width: "100%" }}>
          <line
            x1="30"
            y1="155"
            x2="295"
            y2="45"
            stroke="#fde68a"
            strokeWidth="5"
          />
          {[
            [45, 150],
            [90, 112],
            [135, 125],
            [185, 80],
            [235, 95],
            [280, 38],
          ].map(([x, y], index) => (
            <circle key={index} cx={x} cy={y} r="7" fill="#bfdbfe" />
          ))}
        </svg>
        La curva representa la tendencia.
      </div>
    </div>

    <div style={{ marginTop: 18 }}>
      <InterpolationTable
        headers={["Interpolación", "Regresión"]}
        rows={[
          ["Pasa por todos los datos", "Sigue la tendencia general"],
          ["Datos considerados exactos", "Datos con ruido o dispersión"],
        ]}
      />
    </div>
  </InterpolationBoard>
);

export const Pizarron16 = () => {
  const applications = [
    ["🌉", "Civil", "Perfiles y tablas estructurales"],
    ["⚙️", "Mecánica", "Curvas de rendimiento"],
    ["⚡", "Eléctrica", "Señales y circuitos"],
    ["🧪", "Química", "Propiedades experimentales"],
    ["💻", "Computación", "Gráficos, imágenes y CAD"],
  ];

  return (
    <InterpolationBoard title="APLICACIONES DE LA INTERPOLACIÓN">
      <div
        style={{
          ...interpolationHighlightStyle,
          width: "min(240px, 75%)",
          margin: "0 auto",
          fontSize: 23,
        }}
      >
        INTERPOLACIÓN
      </div>

      <div
        style={{
          color: "#fde68a",
          textAlign: "center",
          fontSize: 25,
          margin: "8px 0",
        }}
      >
        ↓
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
          gap: 11,
        }}
      >
        {applications.map(([icon, area, example]) => (
          <div key={area} style={interpolationBoxStyle}>
            <div style={{ fontSize: 30 }}>{icon}</div>
            <strong style={{ color: "#fde68a" }}>{area}</strong>
            <div style={{ marginTop: 7, fontSize: 13 }}>{example}</div>
          </div>
        ))}
      </div>
    </InterpolationBoard>
  );
};

export const Pizarron17 = () => {
  const methods = [
    ["Lineal", "Dos puntos y comportamiento casi lineal"],
    ["Lagrange", "Pocos puntos; no se añadirán nuevos datos"],
    ["Newton", "Se incorporarán nuevos puntos"],
    ["Diferencias finitas", "Datos igualmente espaciados"],
    ["Splines", "Muchos datos y suavidad requerida"],
  ];

  return (
    <InterpolationBoard title="SELECCIÓN DEL MÉTODO">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(270px, 1fr)",
          gap: 18,
          alignItems: "start",
        }}
      >
        <div>
          <InterpolationFlow
            vertical
            items={[
              "¿Cuántos datos?",
              "¿Solo dos?",
              "Interpolación lineal",
              "¿Muchos datos?",
              "¿Espaciados uniformemente?",
              "Newton con diferencias finitas",
            ]}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 10,
              marginTop: 12,
            }}
          >
            <div style={interpolationBoxStyle}>
              No uniformes → Lagrange o Newton
            </div>
            <div style={interpolationBoxStyle}>
              Suavidad requerida → Splines
            </div>
          </div>
        </div>

        <InterpolationTable
          headers={["Método", "Cuándo usarlo"]}
          rows={methods}
          columns="minmax(105px,.7fr) minmax(165px,1.3fr)"
        />
      </div>

      <div style={{ ...interpolationHighlightStyle, marginTop: 18 }}>
        No existe un método universalmente mejor: la elección depende de los
        datos, la precisión requerida y el objetivo del análisis.
      </div>
    </InterpolationBoard>
  );
};

export const Pizarron18 = () => {
  const methodItems = [
    "Lineal",
    "Polinomial",
    "Lagrange",
    "Newton",
    "Diferencias finitas",
    "Splines",
  ];

  const applications = [
    "Ingeniería",
    "CAD",
    "Procesamiento de señales",
    "Tablas experimentales",
  ];

  const ideas = [
    "Interpolar es estimar dentro del intervalo conocido.",
    "Un mayor grado no siempre produce mejores resultados.",
    "Los splines ofrecen suavidad para grandes conjuntos de datos.",
    "La elección depende del problema y de los datos.",
  ];

  return (
    <InterpolationBoard title="MAPA GENERAL DE INTERPOLACIÓN">
      <div
        style={{
          ...interpolationHighlightStyle,
          width: "min(250px, 75%)",
          margin: "0 auto",
          fontSize: 24,
        }}
      >
        INTERPOLACIÓN
      </div>

      <div
        style={{
          color: "#fde68a",
          textAlign: "center",
          fontSize: 25,
          margin: "8px 0",
        }}
      >
        ↓
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12,
        }}
      >
        <div style={interpolationBoxStyle}>
          <h2 style={{ color: "#fde68a", fontSize: 19 }}>Concepto</h2>
          Datos discretos
          <br />↓<br />
          Función continua
          <br />↓<br />
          Estimar valores dentro del intervalo
        </div>

        <div style={interpolationBoxStyle}>
          <h2 style={{ color: "#fde68a", fontSize: 19 }}>
            Tipos de métodos
          </h2>
          {methodItems.map((method) => (
            <div key={method} style={{ padding: "3px 0" }}>
              {method}
            </div>
          ))}
          <div style={{ color: "#fde68a", fontSize: 21 }}>↓</div>
          Error de interpolación
          <br />
          Runge y selección del método
        </div>

        <div style={interpolationBoxStyle}>
          <h2 style={{ color: "#fde68a", fontSize: 19 }}>Aplicaciones</h2>
          {applications.map((application) => (
            <div key={application} style={{ padding: "4px 0" }}>
              {application}
            </div>
          ))}
        </div>
      </div>

      <aside
        style={{
          ...interpolationHighlightStyle,
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
    </InterpolationBoard>
  );
};