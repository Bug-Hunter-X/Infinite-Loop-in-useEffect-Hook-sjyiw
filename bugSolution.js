```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: effect only runs once on mount
    // No dependency array means it runs after every render
    console.log('useEffect called');
  }, []);

  return <div>Count: {count}</div>;
}
```