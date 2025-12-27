import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import { users, tradingIdeas } from './drizzle/schema';
import { eq } from 'drizzle-orm';

const connection = await mysql.createConnection(process.env.DATABASE_URL!);
const db = drizzle(connection);

// Get owner ID
const [owner] = await db.select({ id: users.id })
  .from(users)
  .where(eq(users.openId, process.env.OWNER_OPEN_ID!))
  .limit(1);

if (!owner) {
  console.error('Owner not found');
  process.exit(1);
}

const authorId = owner.id;

// Insert trading ideas
const tradingIdeasData = [
  {
    instrument: 'EUR/USD',
    contextEn: 'The EUR/USD pair is trading near key resistance at 1.1000 after recent ECB hawkish comments. Dollar weakness provides support, but Fed rate expectations remain elevated.',
    contextRu: 'Пара EUR/USD торгуется около ключевого сопротивления 1.1000 после недавних ястребиных комментариев ЕЦБ. Слабость доллара обеспечивает поддержку, но ожидания по ставкам ФРС остаются повышенными.',
    scenarioEn: 'Base scenario: Consolidation between 1.0900-1.1000 with potential breakout above 1.1000 if dollar weakness persists. Watch for ECB policy signals.',
    scenarioRu: 'Базовый сценарий: консолидация между 1.0900-1.1000 с потенциальным пробоем выше 1.1000 при сохранении слабости доллара. Следите за сигналами политики ЕЦБ.',
    invalidationZone: 'Below 1.0850',
    targetArea: '1.1100-1.1200',
    market: 'fx' as const,
    accessLevel: 'core' as const,
    status: 'published' as const,
    publishedAt: new Date(),
    authorId
  },
  {
    instrument: 'Gold (XAUUSD)',
    contextEn: 'Gold maintains bullish structure above $2600, supported by geopolitical tensions and central bank demand. Near-term resistance at $2680-2700 zone.',
    contextRu: 'Золото сохраняет бычью структуру выше $2600, поддерживаемое геополитической напряжённостью и спросом центральных банков. Ближайшее сопротивление в зоне $2680-2700.',
    scenarioEn: 'Primary scenario: Continuation toward $2700-2750 if support at $2600 holds. Alternative: Pullback to $2550-2580 for re-accumulation.',
    scenarioRu: 'Основной сценарий: продолжение к $2700-2750 при удержании поддержки $2600. Альтернатива: откат к $2550-2580 для повторного накопления.',
    invalidationZone: 'Below $2550',
    targetArea: '$2700-2750',
    market: 'metals' as const,
    accessLevel: 'core' as const,
    status: 'published' as const,
    publishedAt: new Date(),
    authorId
  },
  {
    instrument: 'S&P 500 (US500)',
    contextEn: 'Index testing all-time highs near 6100 amid strong tech earnings and Fed rate cut expectations. Momentum remains positive but overbought conditions warrant caution.',
    contextRu: 'Индекс тестирует исторические максимумы около 6100 на фоне сильных отчётов техсектора и ожиданий снижения ставок ФРС. Импульс остаётся позитивным, но условия перекупленности требуют осторожности.',
    scenarioEn: 'Base case: Gradual advance toward 6200-6300 with periodic consolidations. Risk scenario: Sharp correction to 5900-5950 if profit-taking accelerates.',
    scenarioRu: 'Базовый случай: постепенное продвижение к 6200-6300 с периодическими консолидациями. Риск-сценарий: резкая коррекция к 5900-5950 при ускорении фиксации прибыли.',
    invalidationZone: 'Below 5850',
    targetArea: '6200-6300',
    market: 'indices' as const,
    accessLevel: 'pro' as const,
    status: 'published' as const,
    publishedAt: new Date(),
    authorId
  },
  {
    instrument: 'WTI Crude Oil',
    contextEn: 'Oil consolidating in $68-72 range as OPEC+ production decisions offset demand concerns. Geopolitical premium remains embedded in price.',
    contextRu: 'Нефть консолидируется в диапазоне $68-72, поскольку решения ОПЕК+ по добыче компенсируют опасения по спросу. Геополитическая премия остаётся заложенной в цену.',
    scenarioEn: 'Scenario A: Breakout above $72 targets $75-78 if supply tightens. Scenario B: Break below $68 opens $64-66 on demand weakness.',
    scenarioRu: 'Сценарий А: пробой выше $72 нацелен на $75-78 при ужесточении предложения. Сценарий Б: пробой ниже $68 открывает $64-66 при слабости спроса.',
    invalidationZone: 'Below $65',
    targetArea: '$75-78',
    market: 'energy' as const,
    accessLevel: 'pro' as const,
    status: 'published' as const,
    publishedAt: new Date(),
    authorId
  }
];

await db.insert(tradingIdeas).values(tradingIdeasData);

console.log(`✅ Inserted ${tradingIdeasData.length} trading ideas`);

await connection.end();
