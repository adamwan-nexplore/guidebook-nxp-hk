# Diagram as Code


- For compatibility/ auditing reasons, we should draw our diagrams by code
- Use `MermaidJS` for C4 Diagrams / ERD
- Use `PlantUML` if you need a more flexible layout / advanced diagrams
- You can generate ERD through [mermerd](https://github.com/KarnerTh/mermerd)
- It is Okay to use [Structurizr DSL](https://structurizr.com) to build it, but make sure you have the original source to be version-ed controlled.
- 
```
./mermerd -c "postgresql://{USERNAME}:{PASSWORDD}@{PATH}/{DATABASE}" -s public
```

## Reference

- [Diagram as Code](https://blog.bytebytego.com/p/diagram-as-code)
