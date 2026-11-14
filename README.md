# THE EVIL HOUSE — CURSED MEMORIES

**Developer:** THE LOST DISC ENTERTAINMENT · **Gênero:** survival horror 3D · **Estilo:** jogo "perdido" de PlayStation 1 (1999) rodando no navegador · **Tecnologia:** Three.js + Vite

> *Something is watching in the dark...*

Você é **Willow**, uma raposa de gorro com espinhos e moletom de esqueleto, presa numa mansão que parece ter sido construída com memórias amaldiçoadas. Explore, resolva enigmas, esconda-se do **Watcher**, afaste os **Crawlers** e descubra o que espera no altar do porão.

Este repositório contém o **Capítulo 1 jogável** (não é uma página estática): menu, configurações reais, save/load, mansão 3D com colisão, portas/chaves, inventário, puzzles, inimigos com IA, finais e créditos.

## O que já existe (Capítulo 1)

| Item | Estado |
|---|---|
| Abertura do estúdio (logo 3D + ruído de fita) e boot de console 32-bit original | ✅ |
| Menu principal animado (NEW GAME / CONTINUE / LOAD / SETTINGS / EXTRAS / CREDITS / EXIT) | ✅ |
| Willow low-poly procedural + animações (idle, andar, correr, olhar, susto, interagir, dano, morte, esconder) | ✅ |
| Mansão: Jardim, Entrada/Grande Hall, Corredor do Tapete Vermelho, Biblioteca, Escritório, Porão (sala final) + nicho secreto | ✅ |
| Câmera híbrida: terceira pessoa livre (jardim, corredor, porão) + câmeras fixas cinematográficas (hall, biblioteca, escritório) | ✅ |
| Inimigos: **The Watcher** (patrulha → alerta → perseguição → ataque → busca → retorno), **Crawlers**, **Possessed Fox** | ✅ |
| Esconderijos (guarda-roupas), pistola de faíscas com munição limitada, lanterna com bateria | ✅ |
| Puzzles: chaves, código do cofre (pista num documento), painel de símbolos que abre estante secreta | ✅ |
| Inventário com 8 slots + aba FILES (documentos) | ✅ |
| HUD estilo PS1 (retrato, vidas, cristais, munição, bateria, mensagens, diálogos) | ✅ |
| Pausa real (ESC), 3 slots de save + autosave, checkpoints, 3 vidas, Game Over | ✅ |
| Configurações gráficas/áudio salvas em `localStorage` + presets LOW / MEDIUM / HIGH | ✅ |
| Final bom, final ruim (Raposa Possuída), créditos, extras desbloqueáveis | ✅ |
| Áudio 100% procedural (Web Audio API) — sem arquivos de som, sem licenças | ✅ |

**Fica para os próximos capítulos:** cozinha, quartos, laboratório secreto, os inimigos *Shadows* (listados nos Extras como "planned") e mais puzzles.

## Controles

| Tecla | Ação |
|---|---|
| W A S D / setas ↑↓ | mover (nas câmeras fixas a direção fica "travada" enquanto você segura a tecla, como nos clássicos) |
| SHIFT | correr (faz barulho!) |
| E | interagir / confirmar diálogo |
| F | lanterna |
| ESPAÇO ou clique esquerdo | atirar a pistola de faíscas |
| I | inventário |
| ← → ou arrastar o mouse | girar a câmera (áreas de câmera livre) |
| ESC | pausa |

## Como jogar (dicas sem spoiler)
1. Leia tudo que encontrar — os documentos têm as pistas.
2. O Watcher não pode ser morto; só atordoado. Guarda-roupas escondem você, mas não fique perto dele por muito tempo.
3. Colete cristais: **5 ou mais** mudam o final.

## Rodar localmente

Requer **Node.js 18+**.

```bash
npm install
npm run dev        # abre em http://localhost:5173
```

Dica: adicione `?skip` na URL (`http://localhost:5173/?skip`) para pular direto para o menu.

## Build de produção

```bash
npm run build      # gera a pasta dist/
npm run preview    # testa o build localmente
```

## Publicar no GitHub

```bash
git init
git add .
git commit -m "The Evil House: Cursed Memories — chapter 1"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/the-evil-house-cursed-memories.git
git push -u origin main
```

## Deploy no GitHub Pages (automático)

O workflow `.github/workflows/deploy.yml` já está pronto:

1. No GitHub: **Settings → Pages → Build and deployment → Source: _GitHub Actions_**.
2. Faça push na branch `main`.
3. Em alguns minutos o jogo estará em `https://SEU_USUARIO.github.io/NOME_DO_REPO/`.

O `vite.config.js` usa `base: './'`, então funciona com qualquer nome de repositório.

## Configurações

- **Gráficos:** resolução interna (240p–nativa), escala de render, pixelação/jitter de vértices, qualidade de textura (32/64/128 px), sombras, névoa, anti-aliasing, limite de FPS (30 / 60 / ilimitado), tela cheia, filtro CRT, distorção de tela, brilho.
- **Áudio:** master, música, efeitos, ambiente e mudo.
- **Controles:** sensibilidade da câmera.

> Nota: navegadores não permitem desligar o VSync, então a opção virou **Frame limit** (30 FPS "autêntico de PS1").

## Estrutura

```
src/
  main.js                 boot, carregamento, troca de cenas
  game/                   Engine, Input, Camera, Player, Collision, EnemyAI, Inventory, SaveSystem, SettingsStore, Game (estado)
  scenes/                 Intro, Startup, Menu, Mansion (gameplay), Ending
  entities/               Willow (e Raposa Possuída), Watcher, Crawler, PossessedFox
  environments/           Mansion (geometria), Rooms (dados do mapa), Props, Retro (shader/texturas PS1)
  ui/                     HUD, Menu (+Extras/Créditos), Settings, InventoryUI, PauseMenu, ui helpers
  audio/AudioManager.js   música, ambiente e efeitos procedurais
  styles/style.css
public/images/            artes de referência (capas, ficha da Willow, logo, gameplay)
```

## Créditos de assets

- **Código, modelos 3D, texturas e áudio:** gerados proceduralmente em código (nenhum modelo/som externo).
- **Artes em `public/images/`** (capas, ficha de personagem, selfie, logo do estúdio, referências de gameplay): material do projeto, propriedade do autor do jogo. Não estão cobertas pela licença MIT.
- **Three.js** (MIT) e **Vite** (MIT).
- "PlayStation" é marca da Sony Interactive Entertainment; este projeto é um tributo fã sem afiliação e **não** usa logos, sons ou inicializações oficiais no jogo.

## Licença

Código sob licença MIT (veja `LICENSE`).
