"use client";

import { useMemo, useState } from "react";

import { posts } from "@/data/posts";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = ["Todos", ...Array.from(new Set(posts.map((post) => post.category)))];

export function ConteudosClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === "Todos" || post.category === category;
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
        <Input
          placeholder="Buscar por tema"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <select
          className="input-base"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="space-y-3">
            <Badge variant="gold">{post.category}</Badge>
            <h2 className="text-xl font-semibold text-navy">{post.title}</h2>
            <p className="text-sm text-navy/70">{post.excerpt}</p>
            <p className="text-xs text-navy/60">Mock de conteúdo • Atualize com artigos reais.</p>
          </Card>
        ))}
      </div>
    </>
  );
}
