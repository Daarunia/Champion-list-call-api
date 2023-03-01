import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from "react";

async function fetchData() {
  const result = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.1.1/data/fr_FR/champion.json`);
  const json = await result.json();
  return json;
}


export function championsData() {
  const { data, isError, isLoading } = useQuery(['champions'], fetchData);

  return {
    data,
    isError,
    isLoading,
  };
}

