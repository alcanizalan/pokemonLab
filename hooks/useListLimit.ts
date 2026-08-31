"use client"

import { useState } from "react";

export function useListLimit(){
 const [number, setNumber] = useState(1)

 setNumber(number + 10)
 return number
}