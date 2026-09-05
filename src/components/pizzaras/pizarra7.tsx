const newtonBoardStyle = {
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

const newtonTitleStyle = {
  margin: "0 0 18px",
  color: "#fde68a",
  textAlign: "center",
  fontSize: "clamp(22px, 4vw, 36px)",
};

const newtonBoxStyle = {
  boxSizing: "border-box",
  minWidth: 0,
  padding: 12,
  textAlign: "center",
  border: "2px solid rgba(255,255,255,.82)",
  borderRadius: 8,
  overflowWrap: "anywhere",
};

const newtonHighlightStyle = {
  ...newtonBoxStyle,
  border: "3px solid #fde68a",
};

const newtonFormulaStyle = {
  fontFamily: "monospace",
  fontSize: "clamp(14px, 2vw, 19px)",
  lineHeight: 1.65,
};

const newtonArrowStyle = {
  color: "#fde68a",
  textAlign: "center",
  fontSize: 24,
  lineHeight: 1,
};

const NewtonBoard = ({ title, children }) => (
  <section style={newtonBoardStyle}>
    <h1 style={newtonTitleStyle}>{title}</h1>
    {children}
  </section>
);

const NewtonFlow = ({ items, vertical = false }) => (
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
            ...newtonBoxStyle,
            minWidth: vertical ? 190 : 115,
            maxWidth: vertical ? 300 : 175,
          }}
        >
          {item}
        </div>

        {index < items.length - 1 && (
          <div style={newtonArrowStyle}>{vertical ? "↓" : "→"}</div>
        )}
      </div>
    ))}
  </div>
);

const NewtonTable = ({ headers, rows, columns }) => (
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
            fontSize: "clamp(12px, 1.7vw, 15px)",
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

const NewtonChart = ({
  points = [
    [105, 210],
    [205, 145],
    [315, 105],
    [415, 55],
  ],
  curved = true,
  showAxes = true,
}) => (
  <svg
    viewBox="0 0 500 290"
    style={{
      display: "block",
      width: "100%",
      maxWidth: 540,
      margin: "0 auto",
    }}
  >
    {showAxes && (
      <>
        <line
          x1="55"
          y1="245"
          x2="460"
          y2="245"
          stroke="white"
          strokeWidth="3"
        />
        <line
          x1="55"
          y1="245"
          x2="55"
          y2="30"
          stroke="white"
          strokeWidth="3"
        />
      </>
    )}

    {curved && (
      <path
        d="M95 220 C155 205 165 145 225 145 S315 120 345 85 S410 48 440 38"
        fill="none"
        stroke="#fde68a"
        strokeWidth="5"
      />
    )}

    {points.map(([x, y], index) => (
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
  </svg>
);

export const Pizarron1 = () => (
  <NewtonBoard title="POLINOMIO DE NEWTON">
    <NewtonChart />

    <div style={{ marginTop: 16 }}>
      <NewtonFlow
        items={[
          "Datos conocidos",
          "Diferencias divididas",
          "Polinomio",
          "Valor estimado",
        ]}
      />
    </div>

    <div style={{ ...newtonHighlightStyle, marginTop: 18 }}>
      El polinomio de Newton pasa exactamente por todos los datos conocidos.
    </div>
  </NewtonBoard>
);

export const Pizarron2 = () => (
  <NewtonBoard title="NEWTON VS. INTERPOLACIÓN LINEAL">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 16,
      }}
    >
      <div style={newtonBoxStyle}>
        <h2 style={{ marginTop: 0, color: "#fde68a", fontSize: 21 }}>
          Interpolación lineal
        </h2>

        <NewtonChart
          points={[
            [120, 210],
            [405, 65],
          ]}
          curved={false}
        />

        <div>Dos puntos</div>
        <div>Recta</div>
        <div>Grado 1</div>
      </div>

      <div style={newtonBoxStyle}>
        <h2 style={{ marginTop: 0, color: "#fde68a", fontSize: 21 }}>
          Polinomio de Newton
        </h2>

        <NewtonChart />

        <div>Varios puntos</div>
        <div>Polinomio</div>
        <div>Construcción progresiva</div>
      </div>
    </div>

    <div style={{ ...newtonHighlightStyle, marginTop: 18 }}>
      Newton amplía la interpolación lineal agregando términos que permiten
      representar curvatura.
    </div>
  </NewtonBoard>
);

export const Pizarron3 = () => (
  <NewtonBoard title="DIFERENCIAS DIVIDIDAS: ORDEN 0 Y 1">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
        gap: 18,
        alignItems: "center",
      }}
    >
      <div>
        <div
          style={{
            ...newtonHighlightStyle,
            ...newtonFormulaStyle,
          }}
        >
          f[xᵢ] = f(xᵢ)
        </div>

        <div
          style={{
            ...newtonBoxStyle,
            ...newtonFormulaStyle,
            marginTop: 12,
          }}
        >
          f[x₀,x₁] =
          <br />
          (y₁ − y₀) / (x₁ − x₀)
        </div>
      </div>

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

        <text x="220" y="243" fill="#bfdbfe" fontSize="18">
          x₁ − x₀
        </text>
        <text x="397" y="150" fill="#fca5a5" fontSize="18">
          y₁ − y₀
        </text>
      </svg>
    </div>

    <div style={{ ...newtonHighlightStyle, marginTop: 16 }}>
      La diferencia dividida de primer orden es la pendiente entre dos puntos.
    </div>
  </NewtonBoard>
);

export const Pizarron4 = () => (
  <NewtonBoard title="DIFERENCIAS DE ORDEN SUPERIOR">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(160px,.55fr) minmax(0,1.45fr)",
        gap: 18,
        alignItems: "center",
      }}
    >
      <NewtonFlow
        vertical
        items={["Orden 0", "Orden 1", "Orden 2", "Orden 3"]}
      />

      <div style={{ display: "grid", gap: 10 }}>
        <div style={{ ...newtonBoxStyle, ...newtonFormulaStyle }}>
          f[xᵢ] = f(xᵢ)
        </div>

        <div style={{ ...newtonBoxStyle, ...newtonFormulaStyle }}>
          f[x₀,x₁] =
          <br />
          (f[x₁] − f[x₀]) / (x₁ − x₀)
        </div>

        <div style={{ ...newtonBoxStyle, ...newtonFormulaStyle }}>
          f[x₀,x₁,x₂] =
          <br />
          (f[x₁,x₂] − f[x₀,x₁]) / (x₂ − x₀)
        </div>

        <div style={{ ...newtonBoxStyle, ...newtonFormulaStyle }}>
          f[x₀,x₁,x₂,x₃] =
          <br />
          (f[x₁,x₂,x₃] − f[x₀,x₁,x₂]) / (x₃ − x₀)
        </div>
      </div>
    </div>
  </NewtonBoard>
);

export const Pizarron5 = () => (
  <NewtonBoard title="TABLA DE DIFERENCIAS DIVIDIDAS">
    <NewtonTable
      headers={["x", "f(x)", "Orden 1", "Orden 2", "Orden 3"]}
      rows={[
        ["x₀", "f[x₀]", "f[x₀,x₁]", "f[x₀,x₁,x₂]", "f[x₀,x₁,x₂,x₃]"],
        ["x₁", "f[x₁]", "f[x₁,x₂]", "f[x₁,x₂,x₃]", ""],
        ["x₂", "f[x₂]", "f[x₂,x₃]", "", ""],
        ["x₃", "f[x₃]", "", "", ""],
      ]}
      columns="75px minmax(95px,.8fr) minmax(130px,1fr) minmax(155px,1.15fr) minmax(180px,1.3fr)"
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: 9,
        marginTop: 18,
      }}
    >
      {["a₀ = f[x₀]", "a₁ = f[x₀,x₁]", "a₂ = f[x₀,x₁,x₂]", "a₃ = f[x₀,x₁,x₂,x₃]"].map(
        (coefficient) => (
          <div
            key={coefficient}
            style={{
              ...newtonHighlightStyle,
              fontFamily: "monospace",
              fontSize: "clamp(11px, 1.5vw, 14px)",
            }}
          >
            {coefficient}
          </div>
        )
      )}
    </div>
  </NewtonBoard>
);

export const Pizarron6 = () => (
  <NewtonBoard title="CONSTRUCCIÓN PROGRESIVA">
    <div style={{ display: "grid", gap: 10 }}>
      <div style={{ ...newtonBoxStyle, ...newtonFormulaStyle }}>
        P₀(x) = a₀
      </div>

      <div style={newtonArrowStyle}>↓ añade un punto</div>

      <div style={{ ...newtonBoxStyle, ...newtonFormulaStyle }}>
        P₁(x) = a₀ + a₁(x−x₀)
      </div>

      <div style={newtonArrowStyle}>↓ añade un punto</div>

      <div style={{ ...newtonBoxStyle, ...newtonFormulaStyle }}>
        P₂(x) = P₁(x) + a₂(x−x₀)(x−x₁)
      </div>

      <div style={newtonArrowStyle}>↓ añade un punto</div>

      <div style={{ ...newtonHighlightStyle, ...newtonFormulaStyle }}>
        P₃(x) = P₂(x) + a₃(x−x₀)(x−x₁)(x−x₂)
      </div>
    </div>
  </NewtonBoard>
);

export const Pizarron7 = () => (
  <NewtonBoard title="POLINOMIO DE PRIMER GRADO">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 16,
      }}
    >
      <div style={newtonBoxStyle}>
        <h2 style={{ color: "#fde68a", fontSize: 20 }}>Datos</h2>
        <div style={{ fontFamily: "monospace", fontSize: 20 }}>(1,3)</div>
        <div style={{ fontFamily: "monospace", fontSize: 20 }}>(4,9)</div>
      </div>

      <div style={{ ...newtonBoxStyle, ...newtonFormulaStyle }}>
        f[1,4] =
        <br />
        (9−3)/(4−1)
        <br />
        <strong style={{ color: "#fde68a" }}>f[1,4] = 2</strong>
      </div>
    </div>

    <div
      style={{
        ...newtonHighlightStyle,
        ...newtonFormulaStyle,
        marginTop: 18,
      }}
    >
      P₁(x) = 3 + 2(x−1)
      <br />
      P₁(x) = 2x + 1
    </div>
  </NewtonBoard>
);

export const Pizarron8 = () => (
  <NewtonBoard title="EJEMPLO COMPLETO: PRIMER GRADO">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
        gap: 18,
      }}
    >
      <div
        style={{
          ...newtonBoxStyle,
          ...newtonFormulaStyle,
          textAlign: "left",
        }}
      >
        P₁(x) = f[x₀] + f[x₀,x₁](x−x₀)
        <br />
        <br />
        P₁(x) = 3 + 2(x−1)
        <br />
        P₁(x) = 3 + 2x − 2
        <br />
        <strong style={{ color: "#fde68a" }}>P₁(x) = 2x + 1</strong>
        <br />
        <br />
        Verificación:
        <br />
        P₁(1) = 3
        <br />
        P₁(4) = 9
      </div>

      <svg viewBox="0 0 480 290" style={{ width: "100%" }}>
        <line x1="55" y1="245" x2="445" y2="245" stroke="white" strokeWidth="3" />
        <line x1="55" y1="245" x2="55" y2="35" stroke="white" strokeWidth="3" />
        <line
          x1="115"
          y1="210"
          x2="395"
          y2="65"
          stroke="#fde68a"
          strokeWidth="5"
        />
        <circle cx="115" cy="210" r="9" fill="#bfdbfe" />
        <circle cx="395" cy="65" r="9" fill="#bfdbfe" />
        <text x="90" y="232" fill="white" fontSize="18">
          (1,3)
        </text>
        <text x="370" y="48" fill="white" fontSize="18">
          (4,9)
        </text>
      </svg>
    </div>
  </NewtonBoard>
);

export const Pizarron9 = () => (
  <NewtonBoard title="POLINOMIO DE SEGUNDO GRADO">
    <NewtonTable
      headers={["x", "f(x)", "Orden 1", "Orden 2"]}
      rows={[
        ["1", "1", "3", "1"],
        ["2", "4", "5", ""],
        ["3", "9", "", ""],
      ]}
      columns="80px 100px minmax(120px,1fr) minmax(120px,1fr)"
    />

    <div style={{ marginTop: 18 }}>
      <NewtonFlow
        items={[
          "a₀ = 1",
          "a₁ = 3",
          "a₂ = 1",
          "Nuevo producto: (x−1)(x−2)",
        ]}
      />
    </div>

    <div
      style={{
        ...newtonHighlightStyle,
        ...newtonFormulaStyle,
        marginTop: 18,
      }}
    >
      P₂(x) = 1 + 3(x−1) + (x−1)(x−2)
    </div>
  </NewtonBoard>
);

export const Pizarron10 = () => (
  <NewtonBoard title="EJEMPLO COMPLETO: SEGUNDO GRADO">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 18,
        alignItems: "center",
      }}
    >
      <div
        style={{
          ...newtonBoxStyle,
          ...newtonFormulaStyle,
          textAlign: "left",
        }}
      >
        P₂(x) = 1 + 3(x−1) + (x−1)(x−2)
        <br />
        <br />
        P₂(x) = 1 + 3x − 3 + x² − 3x + 2
        <br />
        <br />
        <strong style={{ color: "#fde68a", fontSize: 23 }}>
          P₂(x) = x²
        </strong>
      </div>

      <svg viewBox="0 0 480 300" style={{ width: "100%" }}>
        <line x1="55" y1="250" x2="445" y2="250" stroke="white" strokeWidth="3" />
        <line x1="55" y1="250" x2="55" y2="35" stroke="white" strokeWidth="3" />
        <path
          d="M80 230 Q245 215 410 45"
          fill="none"
          stroke="#fde68a"
          strokeWidth="5"
        />
        {[
          [150, 205],
          [245, 155],
          [355, 70],
        ].map(([x, y], index) => (
          <circle key={index} cx={x} cy={y} r="8" fill="#bfdbfe" />
        ))}
      </svg>
    </div>
  </NewtonBoard>
);

export const Pizarron11 = () => (
  <NewtonBoard title="POLINOMIO DE TERCER GRADO">
    <NewtonTable
      headers={["x", "f(x)", "Orden 1", "Orden 2", "Orden 3"]}
      rows={[
        ["0", "1", "1", "1", "1"],
        ["1", "2", "3", "4", ""],
        ["2", "5", "11", "", ""],
        ["3", "16", "", "", ""],
      ]}
      columns="65px 80px minmax(100px,1fr) minmax(110px,1fr) minmax(110px,1fr)"
    />

    <div
      style={{
        ...newtonHighlightStyle,
        ...newtonFormulaStyle,
        marginTop: 18,
      }}
    >
      P₃(x) =
      <br />
      1 + 1(x−0) + 1(x−0)(x−1)
      <br />
      + 1(x−0)(x−1)(x−2)
    </div>

    <div style={{ ...newtonBoxStyle, marginTop: 12 }}>
      Cada nuevo orden añade un factor más al producto.
    </div>
  </NewtonBoard>
);

export const Pizarron12 = () => (
  <NewtonBoard title="EVALUACIÓN DEL POLINOMIO">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 16,
      }}
    >
      <div style={{ ...newtonBoxStyle, ...newtonFormulaStyle }}>
        P₂(x) = x²
        <br />
        <br />
        x = 2.5
      </div>

      <div style={{ ...newtonBoxStyle, ...newtonFormulaStyle }}>
        P₂(2.5) = (2.5)²
        <br />
        <br />
        <strong style={{ color: "#fde68a", fontSize: 24 }}>
          P₂(2.5) = 6.25
        </strong>
      </div>
    </div>

    <div style={{ ...newtonHighlightStyle, marginTop: 18 }}>
      En los nodos originales, el polinomio reproduce exactamente los valores
      conocidos.
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 10,
        marginTop: 12,
      }}
    >
      <div style={newtonBoxStyle}>P(1) = 1</div>
      <div style={newtonBoxStyle}>P(2) = 4</div>
      <div style={newtonBoxStyle}>P(3) = 9</div>
    </div>
  </NewtonBoard>
);

export const Pizarron13 = () => (
  <NewtonBoard title="FORMA ANIDADA">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 16,
      }}
    >
      <div style={newtonBoxStyle}>
        <h2 style={{ marginTop: 0, color: "#fde68a", fontSize: 20 }}>
          Forma tradicional
        </h2>

        <div style={newtonFormulaStyle}>
          P₃(x) = a₀
          <br />
          + a₁(x−x₀)
          <br />
          + a₂(x−x₀)(x−x₁)
          <br />
          + a₃(x−x₀)(x−x₁)(x−x₂)
        </div>
      </div>

      <div style={newtonHighlightStyle}>
        <h2 style={{ marginTop: 0, color: "#fde68a", fontSize: 20 }}>
          Forma anidada
        </h2>

        <div style={newtonFormulaStyle}>
          P₃(x) = a₀ + (x−x₀)
          <br />
          [a₁ + (x−x₁)
          <br />
          [a₂ + a₃(x−x₂)]]
        </div>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        marginTop: 18,
        flexWrap: "wrap",
      }}
    >
      {["Caja 1", "Caja 2", "Caja 3", "💻 Menos operaciones"].map(
        (item, index) => (
          <div key={item} style={{ display: "contents" }}>
            <div style={newtonBoxStyle}>{item}</div>
            {index < 3 && <div style={newtonArrowStyle}>→</div>}
          </div>
        )
      )}
    </div>
  </NewtonBoard>
);

export const Pizarron14 = () => (
  <NewtonBoard title="INCORPORAR NUEVOS PUNTOS">
    <NewtonFlow
      items={[
        "P₂ construido",
        "Agregar nuevo punto",
        "Calcular nuevo coeficiente",
        "Añadir nuevo término",
        "P₃",
      ]}
    />

    <div
      style={{
        ...newtonBoxStyle,
        ...newtonFormulaStyle,
        marginTop: 20,
      }}
    >
      P₂(x) = a₀ + a₁(x−x₀) + a₂(x−x₀)(x−x₁)
    </div>

    <div style={newtonArrowStyle}>↓ agregar</div>

    <div
      style={{
        ...newtonHighlightStyle,
        ...newtonFormulaStyle,
      }}
    >
      a₃(x−x₀)(x−x₁)(x−x₂)
    </div>

    <p style={{ textAlign: "center", marginBottom: 0 }}>
      Los términos anteriores permanecen intactos y se reutilizan.
    </p>
  </NewtonBoard>
);

export const Pizarron15 = () => (
  <NewtonBoard title="ERROR DEL POLINOMIO">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 18,
        alignItems: "center",
      }}
    >
      <svg viewBox="0 0 500 300" style={{ width: "100%" }}>
        <line x1="55" y1="250" x2="460" y2="250" stroke="white" strokeWidth="3" />
        <line x1="55" y1="250" x2="55" y2="35" stroke="white" strokeWidth="3" />

        <path
          d="M85 215 C145 85 220 205 285 90 S385 115 435 45"
          fill="none"
          stroke="#bfdbfe"
          strokeWidth="5"
        />

        <path
          d="M85 215 C160 120 230 165 285 105 S375 90 435 45"
          fill="none"
          stroke="#fde68a"
          strokeWidth="4"
          strokeDasharray="9 7"
        />

        <line
          x1="245"
          y1="123"
          x2="245"
          y2="157"
          stroke="#fca5a5"
          strokeWidth="4"
        />

        <text x="255" y="145" fill="#fca5a5" fontSize="19">
          error
        </text>

        {[
          [85, 215],
          [285, 90],
          [435, 45],
        ].map(([x, y], index) => (
          <circle key={index} cx={x} cy={y} r="8" fill="#fff" />
        ))}
      </svg>

      <div>
        <div
          style={{
            ...newtonHighlightStyle,
            ...newtonFormulaStyle,
          }}
        >
          E(x) = f(x) − Pₙ(x)
        </div>

        <div
          style={{
            ...newtonBoxStyle,
            ...newtonFormulaStyle,
            marginTop: 12,
          }}
        >
          E(x) =
          <br />
          f⁽ⁿ⁺¹⁾(ξ)/(n+1)!
          <br />
          · ∏(x−xᵢ)
        </div>
      </div>
    </div>

    <div style={{ ...newtonHighlightStyle, marginTop: 16 }}>
      El error es cero exactamente en cada nodo interpolado.
    </div>
  </NewtonBoard>
);

export const Pizarron16 = () => (
  <NewtonBoard title="DIFERENCIAS DIVIDIDAS VS. FINITAS">
    <NewtonTable
      headers={["Diferencias divididas", "Diferencias finitas"]}
      rows={[
        ["Cualquier espaciamiento", "Espaciamiento uniforme"],
        ["Método general", "Caso simplificado"],
        ["Newton general", "Newton adelante o atrás"],
        ["Usa denominadores variables", "Usa h constante"],
      ]}
    />

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: 12,
        marginTop: 18,
      }}
    >
      <div style={newtonHighlightStyle}>
        Datos desiguales → diferencias divididas
      </div>
      <div style={newtonHighlightStyle}>
        Datos igualmente espaciados → diferencias finitas
      </div>
    </div>
  </NewtonBoard>
);

export const Pizarron17 = () => {
  const applications = [
    ["⚙️", "Mecánica", "Curvas esfuerzo-deformación"],
    ["🌉", "Civil", "Propiedades de materiales"],
    ["⚡", "Eléctrica", "Datos de sensores"],
    ["🧪", "Química", "Propiedades termodinámicas"],
    ["💻", "Computación", "Aproximación de datos"],
    ["📋", "Tablas", "Valores intermedios"],
  ];

  return (
    <NewtonBoard title="APLICACIONES EN INGENIERÍA">
      <div
        style={{
          ...newtonHighlightStyle,
          width: "min(280px, 80%)",
          margin: "0 auto",
          fontSize: 22,
        }}
      >
        POLINOMIO DE NEWTON
      </div>

      <div style={{ ...newtonArrowStyle, margin: "9px 0" }}>↓</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
          gap: 11,
        }}
      >
        {applications.map(([icon, area, example]) => (
          <div key={area} style={newtonBoxStyle}>
            <div style={{ fontSize: 30 }}>{icon}</div>
            <strong style={{ color: "#fde68a" }}>{area}</strong>
            <div style={{ marginTop: 7, fontSize: 13 }}>{example}</div>
          </div>
        ))}
      </div>
    </NewtonBoard>
  );
};

export const Pizarron18 = () => {
  const advantages = [
    "Acepta datos no uniformes",
    "Construcción progresiva",
    "Permite agregar puntos",
    "Reutiliza cálculos",
    "Forma anidada eficiente",
    "Pasa por todos los datos",
  ];

  const limitations = [
    "Puede oscilar en grados altos",
    "Es sensible al ruido",
    "Extrapolación poco confiable",
    "Mayor costo con muchos puntos",
    "Puede presentar fenómeno de Runge",
    "Pierde estabilidad con demasiados nodos",
  ];

  return (
    <NewtonBoard title="VENTAJAS Y LIMITACIONES">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: 16,
        }}
      >
        <div style={{ ...newtonBoxStyle, borderColor: "#86efac" }}>
          <h2 style={{ marginTop: 0, color: "#86efac", fontSize: 21 }}>
            ✔ Ventajas
          </h2>

          {advantages.map((item) => (
            <div key={item} style={{ padding: "5px 0" }}>
              ✔ {item}
            </div>
          ))}
        </div>

        <div style={{ ...newtonBoxStyle, borderColor: "#fca5a5" }}>
          <h2 style={{ marginTop: 0, color: "#fca5a5", fontSize: 21 }}>
            ✖ Limitaciones
          </h2>

          {limitations.map((item) => (
            <div key={item} style={{ padding: "5px 0" }}>
              ✖ {item}
            </div>
          ))}
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
        <div style={newtonHighlightStyle}>Pocos puntos → excelente opción</div>
        <div style={newtonHighlightStyle}>
          Muchos puntos → considerar splines
        </div>
      </div>
    </NewtonBoard>
  );
};

export const Pizarron19 = () => (
  <NewtonBoard title="EJERCICIO INTEGRADOR">
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0,1.1fr) minmax(250px,.9fr)",
        gap: 18,
        alignItems: "start",
      }}
    >
      <div>
        <NewtonFlow
          vertical
          items={[
            "Datos: (1,1), (2,4), (3,9)",
            "Tabla de diferencias",
            "Coeficientes: 1, 3, 1",
            "P₂(x)=1+3(x−1)+(x−1)(x−2)",
            "Evaluar en x=2.5",
            "Resultado: 6.25",
            "✓ Verificar nodos",
          ]}
        />
      </div>

      <div>
        <NewtonTable
          headers={["x", "f(x)", "Orden 1", "Orden 2"]}
          rows={[
            ["1", "1", "3", "1"],
            ["2", "4", "5", ""],
            ["3", "9", "", ""],
          ]}
        />

        <svg
          viewBox="0 0 360 250"
          style={{ width: "100%", marginTop: 14 }}
        >
          <line x1="40" y1="210" x2="330" y2="210" stroke="white" />
          <line x1="40" y1="210" x2="40" y2="25" stroke="white" />

          <path
            d="M65 195 Q185 175 310 35"
            fill="none"
            stroke="#fde68a"
            strokeWidth="5"
          />

          {[
            [105, 180],
            [185, 125],
            [275, 55],
          ].map(([x, y], index) => (
            <circle key={index} cx={x} cy={y} r="8" fill="#bfdbfe" />
          ))}

          <circle
            cx="230"
            cy="92"
            r="9"
            fill="#fca5a5"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>

    <div style={{ ...newtonHighlightStyle, marginTop: 18 }}>
      Valor interpolado: P₂(2.5) = 6.25
    </div>
  </NewtonBoard>
);

export const Pizarron20 = () => {
  const ideas = [
    "Las diferencias divididas generan los coeficientes.",
    "Cada nuevo punto agrega un término nuevo.",
    "El polinomio pasa exactamente por los datos conocidos.",
    "La forma anidada mejora la eficiencia computacional.",
    "Con muchos puntos pueden ser preferibles los splines.",
  ];

  return (
    <NewtonBoard title="MAPA GENERAL DEL POLINOMIO DE NEWTON">
      <div
        style={{
          ...newtonHighlightStyle,
          width: "min(310px, 82%)",
          margin: "0 auto",
          fontSize: 23,
        }}
      >
        POLINOMIO DE NEWTON
      </div>

      <div style={{ ...newtonArrowStyle, margin: "8px 0" }}>↓</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12,
        }}
      >
        <div style={newtonBoxStyle}>
          <h2 style={{ color: "#fde68a", fontSize: 19 }}>Datos conocidos</h2>
          Orden 0
          <br />
          Orden 1
          <br />
          Orden 2
          <br />
          Orden 3
          <br />
          <div style={{ marginTop: 10, fontSize: 30 }}>📋</div>
        </div>

        <div style={newtonBoxStyle}>
          <h2 style={{ color: "#fde68a", fontSize: 19 }}>
            Diferencias divididas
          </h2>
          Primer orden
          <br />
          Segundo orden
          <br />
          Tercer orden
          <br />
          <div style={{ ...newtonArrowStyle, margin: "8px 0" }}>↓</div>
          Coeficientes
        </div>

        <div style={newtonBoxStyle}>
          <h2 style={{ color: "#fde68a", fontSize: 19 }}>
            Polinomio progresivo
          </h2>
          P₁(x)
          <br />
          P₂(x)
          <br />
          P₃(x)
          <br />
          <div style={{ marginTop: 10, fontSize: 30 }}>📈</div>
        </div>
      </div>

      <div style={{ ...newtonArrowStyle, margin: "10px 0" }}>↓</div>

      <div
        style={{
          ...newtonHighlightStyle,
          maxWidth: 340,
          margin: "0 auto",
        }}
      >
        Evaluación del polinomio
      </div>

      <div style={{ ...newtonArrowStyle, margin: "8px 0" }}>↓</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 12,
        }}
      >
        <div style={newtonBoxStyle}>
          💻 Forma anidada
          <br />
          Menos operaciones
        </div>

        <div style={newtonBoxStyle}>
          Error
          <br />
          Cero en los nodos
        </div>

        <div style={newtonBoxStyle}>
          Nuevos puntos
          <br />
          Nuevo término
        </div>
      </div>

      <aside
        style={{
          ...newtonHighlightStyle,
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
    </NewtonBoard>
  );
};