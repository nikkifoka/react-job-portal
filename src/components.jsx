import { Link, NavLink } from "react-router-dom";
import { TYPES, LOCATIONS } from "./data.js";

export function Navbar({ savedCount, appliedCount }) {
  return (
    <header className="nav">
      <Link to="/" className="brand">Shortlist</Link>
      <nav>
        <NavLink to="/" end>Jobs</NavLink>
        <NavLink to="/saved">Saved <span className="pill">{savedCount}</span></NavLink>
        <NavLink to="/applications">Applications <span className="pill">{appliedCount}</span></NavLink>
      </nav>
    </header>
  );
}

export function Filters({ filters, onChange, onReset }) {
  return (
    <div className="filters">
      <input
        type="search"
        placeholder="Search title, company or skill"
        value={filters.query}
        onChange={(e) => onChange("query", e.target.value)}
        aria-label="Search jobs"
      />
      <select value={filters.type} onChange={(e) => onChange("type", e.target.value)} aria-label="Job type">
        {TYPES.map((t) => <option key={t}>{t}</option>)}
      </select>
      <select value={filters.location} onChange={(e) => onChange("location", e.target.value)} aria-label="Location">
        {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
      </select>
      <button className="ghost" onClick={onReset}>Clear filters</button>
    </div>
  );
}

export function JobCard({ job, isSaved, isApplied, onToggleSave }) {
  return (
    <article className="card">
      <div className="card-top">
        <div>
          <h3><Link to={`/jobs/${job.id}`}>{job.title}</Link></h3>
          <p className="muted">{job.company} · {job.location}</p>
        </div>
        <button
          className={isSaved ? "save on" : "save"}
          onClick={() => onToggleSave(job.id)}
          aria-pressed={isSaved}
          aria-label={isSaved ? "Remove from saved" : "Save job"}
        >
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>
      <p className="meta"><strong>{job.salary}</strong> · {job.type} · {job.posted}</p>
      <ul className="tags">{job.skills.map((s) => <li key={s}>{s}</li>)}</ul>
      {isApplied && <p className="applied">You applied to this job</p>}
    </article>
  );
}
