package main

import (
	"html/template"
	"net/http"
)

// Load template once
var tmpl = template.Must(template.ParseFiles("index.html"))

func home(w http.ResponseWriter, r *http.Request) {
	tmpl.Execute(w, nil)
}

func main() {
	http.HandleFunc("/", home)

	println("Server running at http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
