import "./TennisScores.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Calendar from "../Calendar/Calendar";

const TennisScores = ({ selectedDate, setSelectedMatch }) => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLiveMatches = async () => {
      setLoading(true);
      setError(null);

      const formattedDate = (selectedDate ?? new Date()).toISOString().split("T")[0];

      try {
        const response = await axios.get(
          `https://tennis.sportdevs.com/matches-by-date?date=eq.${formattedDate}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_API_TENNIS_KEY}`,
            },
            params: {
              date: formattedDate,
            },
          }
        );

        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching live matches", error);
        setError("Failed to load live matches.");
      } finally {
        setLoading(false);
      }
    };

    fetchLiveMatches();
  }, [selectedDate]);

  if (loading) return <div>Loading live scores...</div>;
  if (error) return <div>{error}</div>;
  if (matches.length === 0) return <div>No live matches at the moment.</div>;

  return (
    <div>
      <h2>Live Tennis Scores</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            <strong>{match.tournament?.name || "Tournament"}</strong>
            <br />
            {match.player1.name} vs {match.player2.name} <br />
            Score: {match.score || "N/A"} <br />
            Status: {match.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TennisScores;
