# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications involving the `useEffect` hook: creating an infinite loop by modifying state within the effect without proper dependency array management. 

## The Problem
The `bug.js` file contains a React component that attempts to increment a state variable `count` infinitely within the `useEffect` hook. Because there's no dependency array, the effect runs repeatedly, causing the state to update and trigger the effect again, creating an infinite loop.