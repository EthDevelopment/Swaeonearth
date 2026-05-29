export type Point = {
  lat: number;
  lng: number;
  note: string;
};

export type JourneySegment = {
  type: "walk" | "transport";
  mode?: "ferry" | "bus" | "flight";
  name: string;
  points: Point[];
};

export const journeySegments: JourneySegment[] = [
  {
    type: "walk",
    name: "Manchester to Dover",
    points: [
      { lat: 53.480547, lng: -2.237459, note: "" },
      { lat: 53.30675, lng: -1.967806, note: "" },
      { lat: 53.250111, lng: -1.911056, note: "" },
      { lat: 53.194722, lng: -1.809583, note: "" },
      { lat: 53.097028, lng: -1.778139, note: "" },
      { lat: 52.993778, lng: -1.712417, note: "" },
      { lat: 52.913139, lng: -1.707028, note: "" },
      { lat: 52.807167, lng: -1.642167, note: "" },
      { lat: 52.700694, lng: -1.629, note: "" },
      { lat: 52.553056, lng: -1.588972, note: "" },
      { lat: 52.409194, lng: -1.507972, note: "" },
      { lat: 52.310439, lng: -1.379669, note: "" },
      { lat: 52.266722, lng: -1.193639, note: "" },
      { lat: 52.236328, lng: -0.897923, note: "" },
      { lat: 52.176597, lng: -0.863267, note: "" },
      { lat: 51.944889, lng: -0.680472, note: "" },
      { lat: 51.732861, lng: -0.461583, note: "" },
      { lat: 51.489667, lng: -0.280389, note: "" },
      // Night #19 removed — was misplaced (logged out of sequence near Bedford)
      { lat: 51.358667, lng: 0.253639, note: "" },
      { lat: 51.30575, lng: 0.336833, note: "" },
      { lat: 51.266889, lng: 0.6135, note: "" },
      { lat: 51.196556, lng: 0.841083, note: "" },
      { lat: 51.127, lng: 1.3128, note: "" },
    ],
  },

  {
    type: "transport",
    mode: "ferry",
    name: "Dover to Calais",
    points: [
      { lat: 51.127, lng: 1.3128, note: "" },
      { lat: 50.9513, lng: 1.8587, note: "" },
    ],
  },

  {
    type: "walk",
    name: "Calais to Monaco",
    points: [
      { lat: 50.9513, lng: 1.8587, note: "" },
      { lat: 50.963611, lng: 1.841278, note: "" },
      { lat: 50.864917, lng: 1.965083, note: "" },
      { lat: 50.80875, lng: 2.017778, note: "" },
      { lat: 50.637083, lng: 2.148306, note: "" },
      { lat: 50.537167, lng: 2.218806, note: "" },
      { lat: 50.385944, lng: 2.331167, note: "" },
      { lat: 50.264111, lng: 2.293389, note: "" },
      { lat: 49.924751, lng: 2.304805, note: "" },
      { lat: 49.832, lng: 2.261, note: "" },
      { lat: 49.708972, lng: 2.252333, note: "" },
      { lat: 49.502083, lng: 2.435694, note: "" },
      { lat: 49.3675, lng: 2.396444, note: "" },
      { lat: 49.1395, lng: 2.489778, note: "" },
      { lat: 48.890111, lng: 2.361278, note: "" },
      { lat: 48.630971, lng: 2.493172, note: "" },
      { lat: 48.544396, lng: 2.547863, note: "" },
      { lat: 48.404975, lng: 2.703958, note: "" },
      { lat: 48.331282, lng: 2.840239, note: "" },
      { lat: 48.213407, lng: 2.97011, note: "" },
      { lat: 48.112462, lng: 3.116082, note: "" },
      { lat: 47.953844, lng: 3.258834, note: "" },
      { lat: 47.904221, lng: 3.417685, note: "" },
      { lat: 47.803389, lng: 3.58512, note: "" },
      { lat: 47.705251, lng: 3.698896, note: "" },
      { lat: 47.507694, lng: 3.965079, note: "" },
      { lat: 47.474332, lng: 4.054165, note: "" },
      { lat: 47.41844, lng: 4.368648, note: "" },
      { lat: 47.267164, lng: 4.556479, note: "" },
      { lat: 47.008919, lng: 4.84936, note: "" },
      { lat: 47.000006, lng: 4.852879, note: "" },
      { lat: 46.944785, lng: 4.854889, note: "" },
      { lat: 46.944778, lng: 4.854889, note: "" },
      { lat: 46.944778, lng: 4.854889, note: "" },
      { lat: 46.564, lng: 4.909861, note: "" },
      { lat: 46.300389, lng: 4.826694, note: "" },
      { lat: 46.253333, lng: 4.81775, note: "" },
      { lat: 46.173194, lng: 4.825472, note: "" },
      { lat: 46.064333, lng: 4.762972, note: "" },
      { lat: 45.904167, lng: 4.817528, note: "" },
      { lat: 45.751028, lng: 4.889472, note: "" },
      { lat: 45.656472, lng: 4.857417, note: "" },
      { lat: 45.512861, lng: 4.854056, note: "" },
      { lat: 45.433889, lng: 4.757028, note: "" },
      { lat: 45.353889, lng: 4.782083, note: "" },
      { lat: 45.265833, lng: 4.812278, note: "" },
      { lat: 45.131056, lng: 4.810083, note: "" },
      { lat: 44.964616, lng: 4.884106, note: "" },
      { lat: 44.931828, lng: 4.889058, note: "" },
      { lat: 44.846861, lng: 4.826667, note: "" },
      { lat: 44.735167, lng: 4.770639, note: "" },
      { lat: 44.558035, lng: 4.747968, note: "" },
      { lat: 44.289478, lng: 4.748721, note: "" },
      { lat: 44.138053, lng: 4.793824, note: "" },
      { lat: 44.082722, lng: 4.852389, note: "" },
      { lat: 43.951333, lng: 4.804222, note: "" },
      { lat: 43.900472, lng: 4.892806, note: "" },
      { lat: 43.881778, lng: 5.010833, note: "" },
      { lat: 43.870361, lng: 5.180389, note: "" },
      { lat: 43.821917, lng: 5.2915, note: "" },
      { lat: 43.846444, lng: 5.416889, note: "" },
      { lat: 43.857361, lng: 5.65075, note: "" },
      { lat: 43.832139, lng: 5.790333, note: "" },
      { lat: 43.808747, lng: 5.814463, note: "" },
      { lat: 43.782833, lng: 5.866306, note: "" },
      { lat: 43.7295, lng: 5.815167, note: "" },
      { lat: 43.641139, lng: 5.93475, note: "" },
      { lat: 43.659417, lng: 6.130944, note: "" },
      { lat: 43.590417, lng: 6.304667, note: "" },
      { lat: 43.539373, lng: 6.467195, note: "" },
      { lat: 43.576278, lng: 6.571, note: "" },
      { lat: 43.61, lng: 6.721694, note: "" },
      { lat: 43.640139, lng: 6.866722, note: "" },
      { lat: 43.662583, lng: 7.060972, note: "" },
      { lat: 43.698749, lng: 7.269359, note: "" },
    ],
  },

  {
    type: "transport",
    mode: "bus",
    name: "Monaco to Herceg Novi",
    points: [
      { lat: 43.698749, lng: 7.269359, note: "" },
      { lat: 44.4056, lng: 8.9463, note: "" }, // Genoa
      { lat: 44.1024, lng: 9.824, note: "" }, // La Spezia
      { lat: 43.7228, lng: 10.4017, note: "" }, // Pisa
      { lat: 43.7696, lng: 11.2558, note: "" }, // Florence
      { lat: 44.4949, lng: 11.3426, note: "" }, // Bologna
      { lat: 45.4064, lng: 11.8768, note: "" }, // Padova
      { lat: 45.4408, lng: 12.3155, note: "" }, // Venice
      { lat: 45.6495, lng: 13.7768, note: "" }, // Trieste
      { lat: 46.0569, lng: 14.5058, note: "" }, // Ljubljana
      { lat: 45.3271, lng: 14.4422, note: "" }, // Rijeka
      { lat: 43.5081, lng: 16.4402, note: "" }, // Split
      { lat: 42.6507, lng: 18.0944, note: "" }, // Dubrovnik
      { lat: 42.4531, lng: 18.5375, note: "" }, // Herceg Novi
    ],
  },

  {
    type: "walk",
    name: "Herceg Novi to North Macedonia",
    points: [
      { lat: 42.462889, lng: 18.576417, note: "" },
      { lat: 42.443, lng: 18.690583, note: "" },
      { lat: 42.414111, lng: 18.718917, note: "" },
      { lat: 42.388444, lng: 18.760278, note: "" },
      { lat: 42.290694, lng: 18.842639, note: "" },
      { lat: 42.246028, lng: 18.902083, note: "" },
      { lat: 42.098389, lng: 19.09975, note: "" },
      { lat: 42.029194, lng: 19.165639, note: "" },
      { lat: 42.014641, lng: 19.249164, note: "" },
      // Albania
      { lat: 42.017747, lng: 19.375438, note: "" },
      { lat: 42.067755, lng: 19.516723, note: "" },
      { lat: 41.996444, lng: 19.527139, note: "" },
      { lat: 41.95325, lng: 19.546194, note: "" },
      { lat: 41.777055, lng: 19.644138, note: "" },
      { lat: 41.672028, lng: 19.669972, note: "" },
      { lat: 41.477083, lng: 19.716639, note: "" },
      { lat: 41.335889, lng: 19.813139, note: "" },
      { lat: 41.298028, lng: 19.852111, note: "" },
      { lat: 41.245692, lng: 19.900409, note: "" },
      { lat: 41.114528, lng: 20.080611, note: "" },
      { lat: 41.148927, lng: 20.161627, note: "" },
      { lat: 41.1775, lng: 20.316917, note: "" },
      { lat: 41.13625, lng: 20.390944, note: "" },
      { lat: 41.098639, lng: 20.440722, note: "" },
      { lat: 41.069972, lng: 20.549639, note: "" },
      // North Macedonia (brief excursion)
      { lat: 41.174191, lng: 20.674594, note: "" },
      { lat: 41.178221, lng: 20.694464, note: "" },
    ],
  },

  {
    type: "transport",
    mode: "bus",
    name: "North Macedonia to Vlore",
    points: [
      { lat: 41.178221, lng: 20.694464, note: "" },
      { lat: 40.4667, lng: 19.4833, note: "" }, // Vlorë
    ],
  },

  {
    type: "walk",
    name: "Vlore to Konispol",
    points: [
      { lat: 40.448139, lng: 19.495806, note: "" },
      { lat: 40.327778, lng: 19.45775, note: "" },
      { lat: 40.245361, lng: 19.555917, note: "" },
      { lat: 40.1555, lng: 19.621778, note: "" },
      { lat: 40.105361, lng: 19.743583, note: "" },
      { lat: 40.113111, lng: 19.752167, note: "" },
      { lat: 40.023278, lng: 19.876028, note: "" },
      { lat: 40.005194, lng: 19.892111, note: "" },
      { lat: 39.991652, lng: 19.915194, note: "" },
      { lat: 39.869389, lng: 20.023333, note: "" },
      { lat: 39.78658, lng: 20.006266, note: "" },
      { lat: 39.731667, lng: 20.024306, note: "" },
      { lat: 39.66, lng: 20.183583, note: "" },
    ],
  },

  {
    type: "transport",
    mode: "bus",
    name: "Konispol to Tirana",
    points: [
      { lat: 39.66, lng: 20.183583, note: "" },
      { lat: 39.8752, lng: 20.0059, note: "" }, // Sarandë
      { lat: 40.4667, lng: 19.4833, note: "" }, // Vlorë
      { lat: 40.7239, lng: 19.5561, note: "" }, // Fier
      { lat: 40.9419, lng: 19.705, note: "" }, // Lushnjë
      { lat: 41.3275, lng: 19.8187, note: "" }, // Tirana city
      { lat: 41.4147, lng: 19.7206, note: "" }, // Tirana airport (TIA)
    ],
  },

  {
    type: "transport",
    mode: "flight",
    name: "Tirana to Istanbul",
    points: [
      { lat: 41.4147, lng: 19.7206, note: "" }, // Tirana airport (TIA)
      { lat: 41.2753, lng: 28.7519, note: "" }, // Istanbul airport (IST)
    ],
  },

  {
    type: "transport",
    mode: "bus",
    name: "Istanbul to Edirne",
    points: [
      { lat: 41.2753, lng: 28.7519, note: "" }, // Istanbul airport (IST)
      { lat: 41.6739, lng: 26.5601, note: "" }, // Edirne
    ],
  },

  {
    type: "walk",
    name: "Edirne to Current Location",
    points: [
      { lat: 41.67390061384773, lng: 26.56009076797564, note: "" },
      { lat: 41.653889, lng: 26.600139, note: "" },
      { lat: 41.619472, lng: 26.63275, note: "" },
      { lat: 41.549693, lng: 26.823809, note: "" },
      { lat: 41.493722, lng: 26.943222, note: "" },
      { lat: 41.432667, lng: 27.097528, note: "" },
      { lat: 41.407271, lng: 27.352519, note: "" },
      { lat: 41.359779, lng: 27.42307, note: "" },
    ],
  },
];
