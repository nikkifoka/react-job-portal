export const initialFilters = { query: "", type: "All", location: "All" };

export function init() {
  try {
    const saved = JSON.parse(localStorage.getItem("jobportal") || "null");
    if (saved) return { ...saved, filters: initialFilters };
  } catch { /* ignore corrupt storage */ }
  return { saved: [], applications: [], filters: initialFilters };
}

export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_SAVE": {
      const id = action.id;
      const saved = state.saved.includes(id)
        ? state.saved.filter((s) => s !== id)
        : [...state.saved, id];
      return { ...state, saved };
    }
    case "APPLY":
      if (state.applications.some((a) => a.jobId === action.application.jobId)) return state;
      return { ...state, applications: [...state.applications, action.application] };
    case "WITHDRAW":
      return { ...state, applications: state.applications.filter((a) => a.jobId !== action.jobId) };
    case "SET_FILTER":
      return { ...state, filters: { ...state.filters, [action.field]: action.value } };
    case "RESET_FILTERS":
      return { ...state, filters: initialFilters };
    default:
      return state;
  }
}
