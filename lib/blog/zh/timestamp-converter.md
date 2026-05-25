## 什么是 Unix 时间戳？

**Unix 时间戳**（也称为 Epoch 时间）是指自 1970 年 1 月 1 日 00:00:00 UTC（Unix Epoch）以来经过的秒数。

现在，时间戳大约是 **18 亿**，并且每秒增加 1。

### 为什么是 1970 年？

Unix 是在 20 世纪 60 年代末和 70 年代初由贝尔实验室开发的。1970 年 1 月 1 日被选为纪元时间，因为它简洁明了——一个干净的整数日期。肯·汤普森和丹尼斯·里奇选择了它，全世界都遵循了这一标准。

## 何时会遇到时间戳

时间戳在开发中随处可见：

| 来源 | 格式 | 示例 |
|--------|--------|---------|
| REST API | 秒 | 1716451200 |
| JavaScript Date.now() | 毫秒 | 1716451200000 |
| Python datetime | 带小数的秒 | 1716451200.123456 |
| 数据库 TIMESTAMP | 秒或毫秒 | 1716451200 |
| Firebase 时间戳 | 毫秒 | 1716451200000 |
| Excel 日期 | 自 1900 年以来的天数 | 45455 |

最常见的错误？混淆秒和毫秒。

## 如何转换时间戳

### 使用 ToolboxPro

访问我们的[时间戳转换器](/tools/timestamp-converter)：

1. **粘贴时间戳**——自动检测是秒还是毫秒
2. **立即查看所有格式**——UTC、ISO 8601、本地时间、相对时间
3. **从日历中选择日期**——获取任意日期的时间戳
4. **一键复制**任何格式

### 代码中的手动转换

```javascript
// JavaScript —— Date.now() 返回毫秒
const ms = Date.now();                       // 1716451200000
const seconds = Math.floor(Date.now() / 1000); // 1716451200

// 转换回来
const date = new Date(1716451200000);
console.log(date.toISOString());  // "2026-05-23T00:00:00.000Z"
```

```python
# Python
import time
import datetime

# 当前时间戳
ts = time.time()  # 1716451200.123456

# 转 datetime
dt = datetime.datetime.fromtimestamp(ts)
print(dt.isoformat())  # "2026-05-23T00:00:00.123456"

# 从 datetime 转时间戳
ts2 = dt.timestamp()
```

```sql
-- PostgreSQL
SELECT EXTRACT(EPOCH FROM NOW());           -- 秒
SELECT EXTRACT(EPOCH FROM NOW()) * 1000;    -- 毫秒
SELECT TO_TIMESTAMP(1716451200);            -- 时间戳转日期时间

-- MySQL
SELECT UNIX_TIMESTAMP();                    -- 秒
SELECT FROM_UNIXTIME(1716451200);           -- 时间戳转日期时间
```

## 2038 年问题

2038 年 1 月 19 日，32 位有符号整数将溢出。时间戳 2147483647（32 位有符号最大值）将回滚到 -2147483648，对应 1901 年 12 月。

**受影响对象：** 遗留系统、嵌入式设备、旧版数据库、32 位操作系统。

**解决方法：** 使用 64 位整数（可安全使用 2920 亿年）或无符号 32 位整数（可安全使用到 2106 年）。

大多数现代系统已使用 64 位时间戳，但请检查你的嵌入式设备和旧版数据库。

## 时区处理

时间戳始终是 UTC。转换为本地时间纯粹是显示逻辑：

```javascript
// 内部始终使用 UTC
const utc = new Date("2026-05-23T12:00:00Z");
console.log(utc.getTime());  // 任何地方都是相同的值

// 在任何时区显示
const tokyo = utc.toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
const nyc = utc.toLocaleString("en-US", { timeZone: "America/New_York" });
```

### 最佳实践

在数据库中始终以 UTC 整数形式存储时间戳。仅在向用户显示时转换为本地时间。这样可以避免所有与时区相关的错误。

## 常见问题

**秒和毫秒有什么区别？** 相差 1000 倍。时间戳 `1716451200`（秒）= 2026 年 5 月 23 日。`1716451200000`（毫秒）= 同一时刻。将毫秒除以 1000 即可转换为秒。

**时间戳包含时区吗？** 不——时间戳始终是 UTC。该数字本身代表地球上任何地方相同的瞬间。

**如何在 shell 脚本中获取当前时间戳？**

```bash
# 秒
date +%s

# 毫秒
echo $(($(date +%s%N)/1000000))
```

**什么是 ISO 8601？** 一种日期格式，如 `2026-05-23T14:30:00+08:00`。它人类可读且包含时区偏移量。我们的工具会同时显示两种格式。
