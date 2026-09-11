# Agent-Rule

可复用的 agent 规则与 opencode 配置，用于在多台 PC 之间同步。

## 目录结构

| 路径 | 说明 |
| --- | --- |
| `AGENTS.md` | 通用规则，适用于所有 agent 工具（如提交约定） |
| `opencode/AGENTS.md` | opencode 专属规则/机制说明 |
| `opencode/plugins/ai-assisted-by.ts` | 按当前模型注入 `AI_ASSISTED_BY` 的 opencode 插件 |
| `opencode/opencode.json` | opencode 主配置 |
| `opencode/tui.json` | opencode TUI 键位配置 |
| `opencode/package.json` | 插件依赖（`@opencode-ai/plugin`） |

## 部署到新 PC

```bash
# 1. 克隆仓库
git clone <repo-url> ~/ssd/GitProjects/Agent-Rule

# 2. 合并通用规则 + opencode 专属规则，写入 opencode 全局规则文件
cat ~/ssd/GitProjects/Agent-Rule/AGENTS.md \
    ~/ssd/GitProjects/Agent-Rule/opencode/AGENTS.md \
    > ~/.config/opencode/AGENTS.md

# 3. 复制插件与配置
cp -r ~/ssd/GitProjects/Agent-Rule/opencode/plugins ~/.config/opencode/
cp ~/ssd/GitProjects/Agent-Rule/opencode/opencode.json \
   ~/ssd/GitProjects/Agent-Rule/opencode/tui.json \
   ~/ssd/GitProjects/Agent-Rule/opencode/package.json \
   ~/.config/opencode/

# 4. 安装插件依赖
cd ~/.config/opencode && npm install   # 或 bun install
```

## 验证

重启 opencode 后执行：

```bash
echo "$AI_ASSISTED_BY"
```

应输出当前模型名（未命中 `MODEL_NAMES` 映射时回退为 `modelID`）。

## 维护

- 需要给模型配置友好名称时，编辑 `opencode/plugins/ai-assisted-by.ts`
  顶部的 `MODEL_NAMES` 常量。
- opencode 配置不热重载，修改后需重启 opencode。
