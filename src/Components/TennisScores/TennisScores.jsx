import "./TennisScores.css"
import axios from "axios"
import React, { useEffect, useState } from 'react';

const TennisScores = ({ selectedDate, setSelectedMatch }) => {
    const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


    useEffect(() => {
    const fetchLiveMatches = async () => {
      setLoading(true);
      const formattedDate = selectedDate.toISOString().split("T")[0];

      try {
        const response = await axios.get(
          'https://tennis.sportdevs.com/matches/live',
          {
            headers: {
              "Authorization": import.meta.env.VITE_API_TENNIS_KEY
            },
            params: {
              date: formattedDate,
            },
          }
        );


        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching live matches", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveMatches();
  }, [selectedDate]);

    return (
        <div>
            Scores
        </div>
    )
}

export default TennisScores