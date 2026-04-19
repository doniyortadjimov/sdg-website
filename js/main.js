(function () {
  'use strict';

  /* ----------------------------------------------------
     Translations (RU / EN / UZ)
     ---------------------------------------------------- */
  const translations = {
    ru: {
      'meta.title': 'keepthinKING SDG — Диагностика отдела продаж',
      'meta.description': 'Бесплатная диагностика отдела продаж. За 40 минут покажем, где теряются 20–30% сделок в вашей воронке, и что чинить в первые 30 дней.',

      'nav.cta': 'Получить бесплатную диагностику',

      'hero.eyebrow': 'Для компаний с длинным циклом сделки',
      'hero.title.1': 'Лиды есть.',
      'hero.title.2': 'Продаж — нет.',
      'hero.lead': 'За 40 минут диагностики покажу, где именно уходят ваши деньги — и что чинить в первые 30 дней, чтобы вернуть их без роста рекламного бюджета.',
      'hero.cta': 'Получить бесплатную диагностику',
      'hero.trust.1': '10+ лет в продажах',
      'hero.trust.2': 'Европа · Ближний Восток · Юго-Восточная Азия',
      'hero.trust.3': 'Специализация: недвижимость и сложные сделки',
      'hero.stat.micro': 'В среднем',
      'hero.stat.caption': 'сделок теряется внутри воронки продаж — до того, как клиент доходит до договора',

      'pain.eyebrow': 'Знакомо?',
      'pain.title': 'Если узнали хотя бы 3 пункта — проблема не в трафике',
      'pain.item.1': 'Менеджеры «консультируют и показывают», но не ведут к сделке',
      'pain.item.2': 'Цену называют слишком рано — и клиент «уходит подумать»',
      'pain.item.3': 'После «я подумаю» никто не возвращается: follow-up как лотерея',
      'pain.item.4': 'Сделки закрываются скидками, маржа тает',
      'pain.item.5': 'Рекламный бюджет растёт — количество договоров стоит на месте',
      'pain.item.6': 'РОП не знает, какой менеджер реально продаёт, а какой — просто консультирует',
      'pain.closer': 'Это не проблема лидов. Это проблема системы продаж.',

      'reframe.eyebrow': 'Математика',
      'reframe.title': 'Удвоить бюджет на рекламу — или поднять конверсию на 2 пункта?',
      'reframe.a.label': 'Сценарий A · Удвоить бюджет',
      'reframe.a.title': 'Больше лидов при той же конверсии',
      'reframe.b.label': 'Сценарий B · Поднять конверсию',
      'reframe.b.title': 'Те же лиды, но закрываются в сделку',
      'reframe.row.leads': 'Лидов в месяц',
      'reframe.row.conv': 'Конверсия',
      'reframe.row.deals': 'Сделок',
      'reframe.row.cost': 'Стоимость сделки',
      'reframe.a.leads': '1 000 → 2 000',
      'reframe.a.conv': '3% → 3%',
      'reframe.a.deals': '30 → 60',
      'reframe.a.cost': 'Та же',
      'reframe.b.leads': '1 000 → 1 000',
      'reframe.b.conv': '3% → 5%',
      'reframe.b.deals': '30 → 50',
      'reframe.b.cost': '−40%',
      'reframe.punchline': 'Рост конверсии с 3% до 5% = <span class="reframe__punchline-accent">+66% сделок</span> без единого доллара в рекламу. Это не про маркетинг — это про то, что ваш менеджер делает с уже оплаченным лидом.',

      'diag.plaque': 'Бесплатная диагностика — беру до 5 компаний в месяц',
      'diag.title': 'Диагностика отдела продаж за 40 минут',
      'diag.lead': 'Это не продающий созвон. Это аудит с разбором, письменным отчётом и планом действий. Даже если мы не начнём работать — у вас останется понимание, где и сколько вы теряете.',
      'diag.valueframe': 'Формат аудита, который обычно стоит $1000+',
      'diag.card.1.title': 'Карта воронки с точками потерь',
      'diag.card.1.text': 'В 9 из 10 случаев находим 20–30% потерь на одном-двух этапах воронки. Покажу эти этапы в цифрах — не «надо улучшить», а «здесь теряете X% сделок».',
      'diag.card.2.title': 'Разбор звонков и встреч менеджеров',
      'diag.card.2.text': 'Прослушаем 3–5 реальных разговоров ваших менеджеров. В среднем 60–70% звонков в девелопменте не доводят клиента даже до встречи. Посмотрим, сколько из них — у вас.',
      'diag.card.3.title': 'Аудит РОПа и системы контроля',
      'diag.card.3.text': 'Проверим, управляется ли отдел по цифрам или «по ощущениям». Какие KPI реально двигают продажи, а какие — имитация работы для отчёта.',
      'diag.card.4.title': 'План на 30 дней',
      'diag.card.4.text': 'Что чинить в первую очередь, что во вторую, что не трогать. Первые изменения в цифрах — обычно за 30–40 дней после начала внедрения.',
      'diag.meta.format.k': 'Формат:',
      'diag.meta.format.v': 'Zoom, 30–40 минут',
      'diag.meta.result.k': 'По итогу:',
      'diag.meta.result.v': 'письменный отчёт',
      'diag.meta.slots.k': 'Беру:',
      'diag.meta.slots.v': 'до 5 компаний в месяц',
      'diag.cta': 'Записаться на диагностику',

      'method.eyebrow': 'Как устроена работа',
      'method.title': 'Система, а не тренинг',
      'method.lead': 'Не учу ваших менеджеров «как правильно продавать». Встраиваю в отдел процесс, который работает без зависимости от настроения РОПа и ухода звёздных сотрудников.',
      'method.step.1.title': 'Диагностика',
      'method.step.1.text': 'Аудит воронки, прослушка звонков, разбор регламентов и работы РОПа.',
      'method.step.1.result': 'Результат: карта потерь + план внедрения.',
      'method.step.2.title': 'Скрипты и сценарии',
      'method.step.2.text': 'Под ваш продукт, а не универсальный шаблон. Для входящего обращения, для follow-up, для возражений по цене, для закрытия на встречу.',
      'method.step.2.result': 'Результат: готовые речевые модули под каждый этап воронки.',
      'method.step.3.title': 'Обучение менеджеров',
      'method.step.3.text': 'Не лекции и не «мотивирующие тренинги». Разбор реальных звонков менеджера, отработка в парах, повторная проверка через 7 дней.',
      'method.step.3.result': 'Результат: менеджер применяет, а не «прослушал и забыл».',
      'method.step.4.title': 'Система контроля',
      'method.step.4.text': 'Чек-листы оценки звонка, критерии качества, KPI. На которые РОП смотрит 15 минут в неделю — и всё понимает.',
      'method.step.4.result': 'Результат: управляемость без ручного режима.',
      'method.step.5.title': 'Follow-up процесс',
      'method.step.5.text': 'Что делать с клиентом, который «подумает». На какой день писать, с каким поводом, с каким оффером.',
      'method.step.5.result': 'Результат: перестаёте терять 40–60% тёплых клиентов после первого касания.',
      'method.step.6.title': 'Сопровождение',
      'method.step.6.text': '30–40 дней после внедрения я на связи. Пока цифры в воронке не сдвинутся — не отпускаю.',
      'method.step.6.result': 'Результат: изменения закрепляются, а не откатываются через месяц.',

      'cases.eyebrow': 'Из практики',
      'cases.title': 'Что меняется после внедрения',
      'cases.row.was': 'Было',
      'cases.row.did': 'Что делали',
      'cases.1.label': 'Кейс 01 — Девелопер, 2 ЖК',
      'cases.1.title': 'Высокий трафик, низкая конверсия',
      'cases.1.was': 'Конверсия в договор ~3%. Менеджеры «консультировали», но не доводили до сделки.',
      'cases.1.did': 'Перестроили скрипт первого контакта, ввели обязательный follow-up, сместили KPI с «звонков» на «встречи и брони».',
      'cases.1.result': 'Конверсия <span>3% → 5%</span> за 45 дней. <span class="case__result-accent">+66%</span> сделок на том же бюджете.',
      'cases.2.label': 'Кейс 02 — Девелопер, 1 проект',
      'cases.2.title': 'Менеджеры не закрывали на следующий шаг',
      'cases.2.was': 'Диалог заканчивался на «я подумаю, перезвоню». Встречи срывались, показы не превращались в брони.',
      'cases.2.did': 'Скрипты закрытия на встречу, запрет называть цену до выявления потребности, ежедневный разбор звонков с РОПом.',
      'cases.2.result': 'Количество встреч <span class="case__result-accent">×1,8</span> → рост сделок за 30 дней.',
      'cases.note': 'Названия клиентов под NDA. На диагностике готов обсудить детали.',

      'compare.eyebrow': 'Чем это отличается',
      'compare.title': 'Внутренний РОП, тренер и консалтинг — это не одно и то же',
      'compare.col.rop': 'Внутренний РОП',
      'compare.col.trainer': 'Бизнес-тренер',
      'compare.col.consult': 'Классический консалтинг',
      'compare.row.1.label': 'Знает специфику девелопмента',
      'compare.row.1.rop': 'Да',
      'compare.row.1.trainer': 'Редко',
      'compare.row.1.consult': 'Редко',
      'compare.row.1.us': 'Глубокая специализация',
      'compare.row.2.label': 'Взгляд со стороны',
      'compare.row.2.rop': '—',
      'compare.row.2.trainer': 'Да',
      'compare.row.2.consult': 'Да',
      'compare.row.2.us': 'Да',
      'compare.row.3.label': 'Не просто учит — внедряет',
      'compare.row.3.rop': 'Управляет',
      'compare.row.3.trainer': 'Учит',
      'compare.row.3.consult': 'Пишет отчёт',
      'compare.row.3.us': 'Встраивает процесс',
      'compare.row.4.label': 'Остаётся после внедрения',
      'compare.row.4.rop': '—',
      'compare.row.4.trainer': '—',
      'compare.row.4.consult': '—',
      'compare.row.4.us': '30–40 дней сопровождения',
      'compare.row.5.label': 'Отвечает за цифры в воронке',
      'compare.row.5.rop': 'Изнутри',
      'compare.row.5.trainer': '—',
      'compare.row.5.consult': '—',
      'compare.row.5.us': 'Измеримый результат',
      'compare.closer': 'Если у вас уже есть сильный РОП — я его не заменяю, а усиливаю. Моя задача — чтобы после моего ухода ваша система работала без меня.',

      'about.eyebrow': 'Кто ведёт диагностику',
      'about.title': '10+ лет в продажах. Специализация: недвижимость и сложные сделки.',
      'about.photo': '[фото автора]',
      'about.p1': '10+ лет в продажах — от менеджера до руководителя отделов. Работал с командами и клиентами в Европе, Дубае, на Бали. Видел, как продают премиум в условиях жёсткой конкуренции — и переношу эти приёмы в региональный девелопмент, где конкуренция растёт каждый квартал.',
      'about.p2': 'В недвижимость пришёл осознанно. Здесь средний чек высокий, а цикл сделки длинный — каждая ошибка менеджера стоит застройщику от десятков до сотен тысяч долларов упущенной маржи. И почти всегда эти ошибки системные, а не «попался плохой продажник».',
      'about.quote': 'Я не верю в случайный рост продаж. Верю в систему: скрипт, контроль и управляемые показатели. Лучший менеджер в вашей компании — это не тот, кого вы наняли. Это тот, кого вы обучили и кем умеете управлять.',
      'about.signature': '— Основатель keepthinKING Sales Development Group',

      'faq.eyebrow': 'Честные ответы',
      'faq.title': 'Что обычно спрашивают до того, как соглашаются',
      'faq.1.q': 'Это дорого для нас',
      'faq.1.a': 'Одна несделанная сделка при среднем чеке вашего продукта — это от десятков до сотен тысяч долларов упущенной маржи. Внедрение окупается с первой же дополнительной сделки в месяц — обычно это происходит в первые 30 дней. Точную экономику под ваши цифры посчитаем на диагностике — бесплатно.',
      'faq.2.q': 'За сколько это окупается?',
      'faq.2.a': 'В среднем — в первый же месяц после внедрения. Одна дополнительная сделка в девелопменте покрывает стоимость проекта в несколько раз. Дальше каждая следующая сделка — чистая прибыль от того, что раньше вы теряли в воронке.',
      'faq.3.q': 'У нас своя специфика — регион, продукт, клиенты',
      'faq.3.a': 'Специфика есть у каждого застройщика. Но проблемы «рано называют цену» и «не делают follow-up» — универсальны. Я не приношу готовый шаблон. Я прихожу слушать ваши звонки и работать с тем, что слышу.',
      'faq.4.q': 'Мы уже пробовали консультантов — не помогло',
      'faq.4.a': 'Большинство консультантов уходит сразу после презентации рекомендаций. Я остаюсь на 30–40 дней после внедрения и отвечаю за то, чтобы цифры в воронке реально сдвинулись. Если не сдвинутся — это моя проблема, а не ваша.',
      'faq.5.q': 'У нас уже есть РОП',
      'faq.5.a': 'Хорошо. Сильный РОП — ваш актив. Но РОП внутри системы не видит её со стороны. Моя роль — дать ему инструменты и свежий взгляд. После моего ухода работает ваш РОП, а не я.',
      'faq.6.q': 'Лучше вложить эти деньги в рекламу',
      'faq.6.a': 'Реклама приводит лидов. Если конверсия не растёт — вы платите дважды: за лида и за то, что он не купил. Рост конверсии с 3% до 5% = +66% сделок без роста бюджета. Реклама и система продаж — это не «или-или», это последовательность: сначала чинят бочку, потом наливают воду.',
      'faq.7.q': 'Сколько времени это займёт у моей команды?',
      'faq.7.a': 'Менеджеры: 2–3 часа в неделю на разборы. РОП: ~5 часов в неделю на контроль. Меньше, чем они сейчас тратят на обсуждение «почему клиент не купил».',

      'final.title': 'Узнайте, где именно теряются ваши сделки',
      'final.lead': '40 минут. Бесплатно. С письменным отчётом и планом.<br>Не продающий созвон — аудит.',
      'final.filter': 'Работаю с компаниями, готовыми инвестировать в рост отдела продаж и внедрять изменения системно. Не для разовых консультаций.',

      'form.name.label': 'Имя',
      'form.name.placeholder': 'Как к вам обращаться',
      'form.phone.label': 'Телефон',
      'form.phone.placeholder': '+___',
      'form.company.label': 'Компания / название проекта',
      'form.company.placeholder': 'ГК или ЖК',
      'form.role.label': 'Должность',
      'form.role.placeholder': 'Выберите',
      'form.role.owner': 'Собственник',
      'form.role.commercial': 'Коммерческий директор',
      'form.role.saleshead': 'РОП / Директор по продажам',
      'form.role.other': 'Другое',
      'form.submit': 'Записаться на диагностику',
      'form.note': 'Отвечаю лично в течение рабочего дня · беру до 5 компаний в месяц',

      'tg.title': 'Разберём вашу воронку за 40 минут',
      'tg.sub': 'Покажу, где вы теряете сделки и что сделать в первые 30 дней',
      'tg.btn': 'Написать в Telegram',
      'tg.note': 'Ответ в течение 15–30 минут',

      'footer.tagline': 'Системные продажи для сложных сделок',
      'footer.telegram': 'Telegram',
      'footer.email': 'Email',
      'footer.copyright': '© 2026',
    },

    en: {
      'meta.title': 'keepthinKING SDG — Sales Department Diagnostic',
      'meta.description': 'Free sales department diagnostic. In 40 minutes we show where 20–30% of deals are lost in your funnel and what to fix in the first 30 days.',

      'nav.cta': 'Get a diagnostic →',

      'hero.eyebrow': 'For businesses with long sales cycles',
      'hero.title.1': 'Leads are there.',
      'hero.title.2': 'Sales are not.',
      'hero.lead': 'In a 40-minute diagnostic I\u2019ll show where your money is leaking \u2014 and what to fix in the first 30 days to recover it without raising your ad budget.',
      'hero.cta': 'Get a free diagnostic',
      'hero.trust.1': '10+ years in sales',
      'hero.trust.2': 'Europe · Middle East · Southeast Asia',
      'hero.trust.3': 'Specialisation: real estate and complex deals',
      'hero.stat.micro': 'On average',
      'hero.stat.caption': 'of deals are lost inside the sales funnel \u2014 before the client reaches a contract',

      'pain.eyebrow': 'Sound familiar?',
      'pain.title': 'If you recognise at least 3 points \u2014 the problem isn\u2019t traffic',
      'pain.item.1': 'Managers \u201Cconsult and show\u201D but don\u2019t lead to a deal',
      'pain.item.2': 'Price is named too early \u2014 and the client \u201Cgoes to think\u201D',
      'pain.item.3': 'After \u201CI\u2019ll think\u201D no one comes back: follow-up is a lottery',
      'pain.item.4': 'Deals close on discounts, margin melts away',
      'pain.item.5': 'Ad budget grows \u2014 the number of contracts stays flat',
      'pain.item.6': 'The sales head doesn\u2019t know which manager actually sells and which just consults',
      'pain.closer': 'This isn\u2019t a leads problem. It\u2019s a sales system problem.',

      'reframe.eyebrow': 'The maths',
      'reframe.title': 'Double the ad budget \u2014 or raise conversion by 2 points?',
      'reframe.a.label': 'Scenario A \u00B7 Double the budget',
      'reframe.a.title': 'More leads at the same conversion',
      'reframe.b.label': 'Scenario B \u00B7 Raise conversion',
      'reframe.b.title': 'Same leads, but they close into deals',
      'reframe.row.leads': 'Leads per month',
      'reframe.row.conv': 'Conversion',
      'reframe.row.deals': 'Deals',
      'reframe.row.cost': 'Cost per deal',
      'reframe.a.leads': '1,000 \u2192 2,000',
      'reframe.a.conv': '3% \u2192 3%',
      'reframe.a.deals': '30 \u2192 60',
      'reframe.a.cost': 'The same',
      'reframe.b.leads': '1,000 \u2192 1,000',
      'reframe.b.conv': '3% \u2192 5%',
      'reframe.b.deals': '30 \u2192 50',
      'reframe.b.cost': '\u221240%',
      'reframe.punchline': 'Conversion growth from 3% to 5% = <span class="reframe__punchline-accent">+66% deals</span> without a single dollar in advertising. This isn\u2019t about marketing \u2014 it\u2019s about what your manager does with a lead you\u2019ve already paid for.',

      'diag.plaque': 'Free diagnostic \u2014 I take up to 5 companies per month',
      'diag.title': 'Sales department diagnostic in 40 minutes',
      'diag.lead': 'This isn\u2019t a sales call. It\u2019s an audit with a breakdown, a written report and an action plan. Even if we don\u2019t end up working together \u2014 you\u2019ll leave with a clear picture of where and how much you\u2019re losing.',
      'diag.valueframe': 'An audit format that usually costs $1000+',
      'diag.card.1.title': 'Funnel map with loss points',
      'diag.card.1.text': 'In 9 out of 10 cases we find 20\u201330% losses at one or two funnel stages. I\u2019ll show those stages in numbers \u2014 not \u201Cneeds improvement\u201D but \u201Cyou\u2019re losing X% of deals here\u201D.',
      'diag.card.2.title': 'Call and meeting analysis for managers',
      'diag.card.2.text': 'We\u2019ll listen to 3\u20135 real conversations from your managers. On average 60\u201370% of calls in real-estate development don\u2019t even bring the client to a meeting. We\u2019ll see how many of those are yours.',
      'diag.card.3.title': 'Sales head and control-system audit',
      'diag.card.3.text': 'We\u2019ll check whether the department is run on numbers or \u201Con feel\u201D. Which KPIs actually drive sales and which just imitate work for the report.',
      'diag.card.4.title': '30-day plan',
      'diag.card.4.text': 'What to fix first, what to fix second, what not to touch. The first shifts in numbers usually appear 30\u201340 days after rollout begins.',
      'diag.meta.format.k': 'Format:',
      'diag.meta.format.v': 'Zoom, 30\u201340 minutes',
      'diag.meta.result.k': 'Outcome:',
      'diag.meta.result.v': 'a written report',
      'diag.meta.slots.k': 'Capacity:',
      'diag.meta.slots.v': 'up to 5 companies per month',
      'diag.cta': 'Book a diagnostic',

      'method.eyebrow': 'How the work is built',
      'method.title': 'A system, not a training',
      'method.lead': 'I don\u2019t teach your managers \u201Chow to sell properly\u201D. I embed a process in the department that works independent of the sales head\u2019s mood and the departure of star employees.',
      'method.step.1.title': 'Diagnostic',
      'method.step.1.text': 'Funnel audit, call listening, review of procedures and the sales head\u2019s work.',
      'method.step.1.result': 'Outcome: a loss map + an implementation plan.',
      'method.step.2.title': 'Scripts and scenarios',
      'method.step.2.text': 'Tailored to your product, not a generic template. For first contact, follow-up, price objections, closing to a meeting.',
      'method.step.2.result': 'Outcome: ready-to-use conversation modules for every funnel stage.',
      'method.step.3.title': 'Manager training',
      'method.step.3.text': 'Not lectures and not \u201Cmotivational trainings\u201D. Review of the manager\u2019s real calls, pair practice, a re-check after 7 days.',
      'method.step.3.result': 'Outcome: the manager applies it \u2014 rather than \u201Cheard and forgot\u201D.',
      'method.step.4.title': 'Control system',
      'method.step.4.text': 'Call-evaluation checklists, quality criteria, KPIs. The sales head looks at them for 15 minutes a week \u2014 and understands everything.',
      'method.step.4.result': 'Outcome: manageability without hands-on mode.',
      'method.step.5.title': 'Follow-up process',
      'method.step.5.text': 'What to do with a client who \u201Cwill think about it\u201D. Which day to reach out, with what reason, with what offer.',
      'method.step.5.result': 'Outcome: you stop losing 40\u201360% of warm clients after the first touch.',
      'method.step.6.title': 'Follow-through',
      'method.step.6.text': '30\u201340 days after rollout I stay available. Until the funnel numbers move \u2014 I don\u2019t step away.',
      'method.step.6.result': 'Outcome: the changes settle in rather than rolling back a month later.',

      'cases.eyebrow': 'From practice',
      'cases.title': 'What changes after implementation',
      'cases.row.was': 'Before',
      'cases.row.did': 'What we did',
      'cases.1.label': 'Case 01 \u2014 Developer, 2 residential projects',
      'cases.1.title': 'High traffic, low conversion',
      'cases.1.was': 'Contract conversion ~3%. Managers \u201Cconsulted\u201D but didn\u2019t close deals.',
      'cases.1.did': 'Rebuilt the first-contact script, introduced mandatory follow-up, shifted KPIs from \u201Ccalls\u201D to \u201Cmeetings and reservations\u201D.',
      'cases.1.result': 'Conversion <span>3% \u2192 5%</span> in 45 days. <span class="case__result-accent">+66%</span> deals on the same budget.',
      'cases.2.label': 'Case 02 \u2014 Developer, 1 project',
      'cases.2.title': 'Managers weren\u2019t closing to the next step',
      'cases.2.was': 'Dialogues ended on \u201CI\u2019ll think, I\u2019ll call back\u201D. Meetings fell through, viewings didn\u2019t convert to reservations.',
      'cases.2.did': 'Scripts for closing to a meeting, a ban on naming the price before needs are identified, daily call reviews with the sales head.',
      'cases.2.result': 'Meeting count <span class="case__result-accent">\u00D71.8</span> \u2192 deal growth in 30 days.',
      'cases.note': 'Client names are under NDA. Ready to discuss details at the diagnostic.',

      'compare.eyebrow': 'How this differs',
      'compare.title': 'An in-house sales head, a trainer and consulting are not the same thing',
      'compare.col.rop': 'In-house sales head',
      'compare.col.trainer': 'Business trainer',
      'compare.col.consult': 'Classical consulting',
      'compare.row.1.label': 'Knows real-estate specifics',
      'compare.row.1.rop': 'Yes',
      'compare.row.1.trainer': 'Rarely',
      'compare.row.1.consult': 'Rarely',
      'compare.row.1.us': 'Deep specialisation',
      'compare.row.2.label': 'Outside perspective',
      'compare.row.2.rop': '\u2014',
      'compare.row.2.trainer': 'Yes',
      'compare.row.2.consult': 'Yes',
      'compare.row.2.us': 'Yes',
      'compare.row.3.label': 'Not just teaches \u2014 implements',
      'compare.row.3.rop': 'Manages',
      'compare.row.3.trainer': 'Teaches',
      'compare.row.3.consult': 'Writes a report',
      'compare.row.3.us': 'Embeds the process',
      'compare.row.4.label': 'Stays after implementation',
      'compare.row.4.rop': '\u2014',
      'compare.row.4.trainer': '\u2014',
      'compare.row.4.consult': '\u2014',
      'compare.row.4.us': '30\u201340 days of follow-through',
      'compare.row.5.label': 'Accountable for funnel numbers',
      'compare.row.5.rop': 'From inside',
      'compare.row.5.trainer': '\u2014',
      'compare.row.5.consult': '\u2014',
      'compare.row.5.us': 'Measurable result',
      'compare.closer': 'If you already have a strong sales head \u2014 I don\u2019t replace them, I reinforce them. My task is to leave a system that works without me.',

      'about.eyebrow': 'Who runs the diagnostic',
      'about.title': '10+ years in sales. Specialisation: real estate and complex deals.',
      'about.photo': '[author photo]',
      'about.p1': '10+ years in sales \u2014 from manager to head of departments. Worked with teams and clients in Europe, Dubai and Bali. Saw how premium is sold under intense competition \u2014 and bring those practices into regional real-estate development, where competition grows every quarter.',
      'about.p2': 'I came into real estate deliberately. The average cheque is high, the sales cycle is long \u2014 every manager\u2019s mistake costs the developer tens to hundreds of thousands of dollars in missed margin. And these mistakes are almost always systemic, not \u201Cwe hired a bad salesperson\u201D.',
      'about.quote': 'I don\u2019t believe in accidental sales growth. I believe in a system: scripts, control, and managed metrics. The best manager in your company isn\u2019t the one you hired. It\u2019s the one you trained \u2014 and know how to manage.',
      'about.signature': '\u2014 Founder, keepthinKING Sales Development Group',

      'faq.eyebrow': 'Honest answers',
      'faq.title': 'What\u2019s usually asked before agreeing',
      'faq.1.q': 'This is expensive for us',
      'faq.1.a': 'One un-closed deal at your product\u2019s average cheque is tens to hundreds of thousands of dollars in missed margin. The engagement pays off from the very first additional deal in a month \u2014 usually within the first 30 days. We\u2019ll run the exact economics for your numbers at the diagnostic \u2014 free.',
      'faq.2.q': 'How long until it pays back?',
      'faq.2.a': 'On average \u2014 in the very first month after rollout. One additional deal in real-estate development covers the project cost several times over. After that, every next deal is pure profit recovered from what was being lost in the funnel.',
      'faq.3.q': 'We have our own specifics \u2014 region, product, clients',
      'faq.3.a': 'Every developer has specifics. But \u201Cprice named too early\u201D and \u201Cno follow-up\u201D are universal problems. I don\u2019t bring a pre-built template. I come to listen to your calls and work with what I hear.',
      'faq.4.q': 'We\u2019ve tried consultants \u2014 it didn\u2019t help',
      'faq.4.a': 'Most consultants leave right after presenting recommendations. I stay 30\u201340 days after rollout and take responsibility for the funnel numbers actually moving. If they don\u2019t move \u2014 that\u2019s my problem, not yours.',
      'faq.5.q': 'We already have a sales head',
      'faq.5.a': 'Good. A strong sales head is your asset. But a sales head inside the system doesn\u2019t see it from outside. My role is to give them tools and a fresh perspective. After I leave, your sales head runs it \u2014 not me.',
      'faq.6.q': 'Better to put this money into advertising',
      'faq.6.a': 'Advertising brings leads. If conversion doesn\u2019t grow \u2014 you pay twice: for the lead and for the fact they didn\u2019t buy. Conversion from 3% to 5% = +66% deals without a budget increase. Advertising and the sales system aren\u2019t an either/or \u2014 they\u2019re a sequence: first you fix the barrel, then you pour water in.',
      'faq.7.q': 'How much of my team\u2019s time will this take?',
      'faq.7.a': 'Managers: 2\u20133 hours a week for reviews. Sales head: ~5 hours a week for control. Less than they currently spend discussing \u201Cwhy the client didn\u2019t buy\u201D.',

      'final.title': 'Find out exactly where your deals are being lost',
      'final.lead': '40 minutes. Free. With a written report and plan.<br>Not a sales call \u2014 an audit.',
      'final.filter': 'I work with companies ready to invest in growing their sales department and implement changes systematically. Not for one-off consultations.',

      'form.name.label': 'Name',
      'form.name.placeholder': 'How should I address you',
      'form.phone.label': 'Phone',
      'form.phone.placeholder': '+___',
      'form.company.label': 'Company / project name',
      'form.company.placeholder': 'Group or project',
      'form.role.label': 'Role',
      'form.role.placeholder': 'Select',
      'form.role.owner': 'Owner',
      'form.role.commercial': 'Commercial director',
      'form.role.saleshead': 'Sales head / Sales director',
      'form.role.other': 'Other',
      'form.submit': 'Book a diagnostic',
      'form.note': 'I reply personally within one business day \u00B7 up to 5 companies per month',

      'tg.title': 'Let\u2019s review your funnel in 40 minutes',
      'tg.sub': 'I\u2019ll show where you\u2019re losing deals and what to fix in the first 30 days',
      'tg.btn': 'Message on Telegram',
      'tg.note': 'Reply within 15\u201330 minutes',

      'footer.tagline': 'System-driven sales for complex deals',
      'footer.telegram': 'Telegram',
      'footer.email': 'Email',
      'footer.copyright': '\u00A9 2026',
    },

    uz: {
      'meta.title': 'keepthinKING SDG \u2014 Savdo bo\u2019limi diagnostikasi',
      'meta.description': 'Savdo bo\u2019limining bepul diagnostikasi. 40 daqiqada voronkangizda bitimlarning 20\u201330% qayerda yo\u2019qolayotganini va birinchi 30 kunda nimani tuzatish kerakligini ko\u2019rsatamiz.',

      'nav.cta': 'Diagnostika olish \u2192',

      'hero.eyebrow': 'Uzun savdo siklidagi kompaniyalar uchun',
      'hero.title.1': 'Lidlar bor.',
      'hero.title.2': 'Savdo \u2014 yo\u2019q.',
      'hero.lead': '40 daqiqalik diagnostikada pulingiz aniq qayerda yo\u2019qolayotganini ko\u2019rsataman \u2014 va reklama byudjetini oshirmasdan uni qaytarish uchun birinchi 30 kunda nimani tuzatish kerakligini.',
      'hero.cta': 'Bepul diagnostika olish',
      'hero.trust.1': 'Savdoda 10+ yil',
      'hero.trust.2': 'Yevropa · Yaqin Sharq · Janubi-Sharqiy Osiyo',
      'hero.trust.3': 'Ixtisoslashuv: ko\u2019chmas mulk va murakkab bitimlar',
      'hero.stat.micro': 'O\u2019rtacha',
      'hero.stat.caption': 'bitim savdo voronkasi ichida yo\u2019qoladi \u2014 mijoz shartnomaga yetib borgunicha',

      'pain.eyebrow': 'Tanishmi?',
      'pain.title': 'Agar kamida 3 ta punktni taniy olsangiz \u2014 muammo trafikda emas',
      'pain.item.1': 'Menejerlar \u00ABmaslahat berib, ko\u2019rsatadi\u00BB, ammo bitimga olib kelmaydi',
      'pain.item.2': 'Narxni juda erta aytadi \u2014 va mijoz \u00ABo\u2019ylab ko\u2019rish uchun ketadi\u00BB',
      'pain.item.3': '\u00ABO\u2019ylab ko\u2019raman\u00BB dan keyin hech kim qaytmaydi: follow-up lotereya kabi',
      'pain.item.4': 'Bitimlar chegirmalar bilan yopiladi, marja eriydi',
      'pain.item.5': 'Reklama byudjeti o\u2019sadi \u2014 shartnomalar soni joyida turadi',
      'pain.item.6': 'Savdo rahbari qaysi menejer haqiqatan sotayotganini va qaysi biri shunchaki maslahat berayotganini bilmaydi',
      'pain.closer': 'Bu lidlar muammosi emas. Bu savdo tizimi muammosi.',

      'reframe.eyebrow': 'Matematika',
      'reframe.title': 'Reklama byudjetini ikki baravar oshirishmi \u2014 yoki konversiyani 2 punktga ko\u2019tarishmi?',
      'reframe.a.label': 'A ssenariy \u00B7 Byudjetni ikki baravar oshirish',
      'reframe.a.title': 'Bir xil konversiyada ko\u2019proq lid',
      'reframe.b.label': 'B ssenariy \u00B7 Konversiyani oshirish',
      'reframe.b.title': 'O\u2019sha lidlar, lekin bitimga aylanadi',
      'reframe.row.leads': 'Oyiga lidlar',
      'reframe.row.conv': 'Konversiya',
      'reframe.row.deals': 'Bitimlar',
      'reframe.row.cost': 'Bitim narxi',
      'reframe.a.leads': '1 000 \u2192 2 000',
      'reframe.a.conv': '3% \u2192 3%',
      'reframe.a.deals': '30 \u2192 60',
      'reframe.a.cost': 'Xuddi o\u2019sha',
      'reframe.b.leads': '1 000 \u2192 1 000',
      'reframe.b.conv': '3% \u2192 5%',
      'reframe.b.deals': '30 \u2192 50',
      'reframe.b.cost': '\u221240%',
      'reframe.punchline': 'Konversiyaning 3%dan 5%ga o\u2019sishi = <span class="reframe__punchline-accent">+66% bitim</span> reklamaga bir dollar ham qo\u2019shmasdan. Bu marketing haqida emas \u2014 bu menejeringiz siz to\u2019lab olgan lid bilan nima qilayotgani haqida.',

      'diag.plaque': 'Bepul diagnostika \u2014 oyiga 5 tagacha kompaniyani qabul qilaman',
      'diag.title': '40 daqiqada savdo bo\u2019limi diagnostikasi',
      'diag.lead': 'Bu sotuv qo\u2019ng\u2019irog\u2019i emas. Bu tahlil, yozma hisobot va harakat rejasi bilan audit. Biz ishlashni boshlamaganimizda ham \u2014 qayerda va qancha yo\u2019qotayotganingiz haqida aniq tushuncha qoladi.',
      'diag.valueframe': 'Odatda $1000+ turadigan audit formati',
      'diag.card.1.title': 'Yo\u2019qotish nuqtalari bilan voronka xaritasi',
      'diag.card.1.text': '10 tadan 9 holatda voronkaning bir yoki ikki bosqichida 20\u201330% yo\u2019qotishni topamiz. Bu bosqichlarni raqamlarda ko\u2019rsataman \u2014 \u00AByaxshilash kerak\u00BB emas, balki \u00ABbu yerda bitimlarning X%ini yo\u2019qotyapsiz\u00BB.',
      'diag.card.2.title': 'Menejerlarning qo\u2019ng\u2019iroq va uchrashuvlarini tahlil qilish',
      'diag.card.2.text': 'Menejerlaringizning 3\u20135 ta haqiqiy suhbatini tinglaymiz. O\u2019rtacha, ko\u2019chmas mulk sohasida qo\u2019ng\u2019iroqlarning 60\u201370%i mijozni uchrashuvgacha ham olib kelmaydi. Sizda qanchasi shunday ekanini ko\u2019ramiz.',
      'diag.card.3.title': 'Savdo rahbari va nazorat tizimi auditi',
      'diag.card.3.text': 'Bo\u2019lim raqamlar asosida yoki \u00ABhis-tuyg\u2019u\u00BB bo\u2019yicha boshqarilayotganini tekshiramiz. Qaysi KPIlar savdoni haqiqatda harakatlantiradi, qaysilari \u2014 hisobot uchun ishning taqlidi.',
      'diag.card.4.title': '30 kunlik reja',
      'diag.card.4.text': 'Nimani birinchi navbatda, nimani keyin tuzatish kerak, nimaga tegmaslik. Raqamlardagi birinchi o\u2019zgarishlar odatda joriy etish boshlanganidan 30\u201340 kun o\u2019tib ko\u2019rinadi.',
      'diag.meta.format.k': 'Format:',
      'diag.meta.format.v': 'Zoom, 30\u201340 daqiqa',
      'diag.meta.result.k': 'Natija:',
      'diag.meta.result.v': 'yozma hisobot',
      'diag.meta.slots.k': 'Qabul qilaman:',
      'diag.meta.slots.v': 'oyiga 5 tagacha kompaniya',
      'diag.cta': 'Diagnostikaga yozilish',

      'method.eyebrow': 'Ish qanday qurilgan',
      'method.title': 'Tizim, trening emas',
      'method.lead': 'Menejerlaringizga \u00ABqanday qilib to\u2019g\u2019ri sotishni\u00BB o\u2019rgatmayman. Bo\u2019limga savdo rahbarining kayfiyatiga va yulduz xodimlarning ketishiga bog\u2019liq bo\u2019lmagan jarayonni joriy qilaman.',
      'method.step.1.title': 'Diagnostika',
      'method.step.1.text': 'Voronka auditi, qo\u2019ng\u2019iroqlarni tinglash, reglamentlar va savdo rahbarining ishini tahlil qilish.',
      'method.step.1.result': 'Natija: yo\u2019qotishlar xaritasi + joriy etish rejasi.',
      'method.step.2.title': 'Skriptlar va ssenariylar',
      'method.step.2.text': 'Mahsulotingizga mos, umumiy shablon emas. Kiruvchi murojaat uchun, follow-up uchun, narx bo\u2019yicha e\u2019tirozlar uchun, uchrashuvga yopish uchun.',
      'method.step.2.result': 'Natija: voronkaning har bir bosqichi uchun tayyor nutq modullari.',
      'method.step.3.title': 'Menejerlarni o\u2019qitish',
      'method.step.3.text': 'Ma\u2019ruzalar ham emas, \u00ABmotivatsion treninglar\u00BB ham emas. Menejerning haqiqiy qo\u2019ng\u2019iroqlarini tahlil qilish, juftlikda mashq, 7 kundan keyin qayta tekshirish.',
      'method.step.3.result': 'Natija: menejer qo\u2019llaydi \u2014 \u00ABtinglab, unutmadi\u00BB emas.',
      'method.step.4.title': 'Nazorat tizimi',
      'method.step.4.text': 'Qo\u2019ng\u2019iroqni baholash chek-listlari, sifat mezonlari, KPI. Savdo rahbari ularga haftasiga 15 daqiqa qaraydi \u2014 va hammasini tushunadi.',
      'method.step.4.result': 'Natija: qo\u2019lda boshqaruvsiz boshqariluvchanlik.',
      'method.step.5.title': 'Follow-up jarayoni',
      'method.step.5.text': '\u00ABO\u2019ylab ko\u2019raman\u00BB deydigan mijoz bilan nima qilish. Qaysi kuni yozish, qaysi sabab bilan, qaysi taklif bilan.',
      'method.step.5.result': 'Natija: birinchi aloqadan keyin iliq mijozlarning 40\u201360%ini yo\u2019qotishni to\u2019xtatasiz.',
      'method.step.6.title': 'Hamrohlik',
      'method.step.6.text': 'Joriy etilganidan keyin 30\u201340 kun aloqadaman. Voronkadagi raqamlar o\u2019zgarmaguncha \u2014 qo\u2019yib yubormayman.',
      'method.step.6.result': 'Natija: o\u2019zgarishlar mustahkamlanadi, bir oydan keyin orqaga qaytmaydi.',

      'cases.eyebrow': 'Amaliyotdan',
      'cases.title': 'Joriy etilganidan keyin nima o\u2019zgaradi',
      'cases.row.was': 'Avval',
      'cases.row.did': 'Nima qildik',
      'cases.1.label': '01-kays \u2014 Quruvchi, 2 turar-joy majmuasi',
      'cases.1.title': 'Yuqori trafik, past konversiya',
      'cases.1.was': 'Shartnomaga konversiya ~3%. Menejerlar \u00ABmaslahat berardi\u00BB, lekin bitimgacha olib kelmasdi.',
      'cases.1.did': 'Birinchi aloqa skriptini qayta qurdik, majburiy follow-up kiritdik, KPIlarni \u00ABqo\u2019ng\u2019iroqlardan\u00BB \u00ABuchrashuv va bronlarga\u00BB ko\u2019chirdik.',
      'cases.1.result': 'Konversiya <span>3% \u2192 5%</span> 45 kunda. <span class="case__result-accent">+66%</span> bitim bir xil byudjetda.',
      'cases.2.label': '02-kays \u2014 Quruvchi, 1 loyiha',
      'cases.2.title': 'Menejerlar keyingi qadamga yopa olmasdi',
      'cases.2.was': 'Muloqot \u00ABo\u2019ylab ko\u2019raman, qayta qo\u2019ng\u2019iroq qilaman\u00BB bilan tugardi. Uchrashuvlar buzilardi, ko\u2019riklar bronga aylanmasdi.',
      'cases.2.did': 'Uchrashuvga yopish skriptlari, ehtiyoj aniqlanmaguncha narxni aytish taqiqi, savdo rahbari bilan kunlik qo\u2019ng\u2019iroq tahlili.',
      'cases.2.result': 'Uchrashuvlar soni <span class="case__result-accent">\u00D71,8</span> \u2192 30 kunda bitimlarning o\u2019sishi.',
      'cases.note': 'Mijoz nomlari NDA ostida. Diagnostika paytida tafsilotlarni muhokama qilishga tayyorman.',

      'compare.eyebrow': 'Qaysi jihatdan farqlanadi',
      'compare.title': 'Ichki savdo rahbari, trener va konsalting \u2014 bu bir xil narsa emas',
      'compare.col.rop': 'Ichki savdo rahbari',
      'compare.col.trainer': 'Biznes-trener',
      'compare.col.consult': 'Klassik konsalting',
      'compare.row.1.label': 'Ko\u2019chmas mulk sohasining xususiyatlarini biladi',
      'compare.row.1.rop': 'Ha',
      'compare.row.1.trainer': 'Kamdan-kam',
      'compare.row.1.consult': 'Kamdan-kam',
      'compare.row.1.us': 'Chuqur ixtisoslashuv',
      'compare.row.2.label': 'Tashqi qarash',
      'compare.row.2.rop': '\u2014',
      'compare.row.2.trainer': 'Ha',
      'compare.row.2.consult': 'Ha',
      'compare.row.2.us': 'Ha',
      'compare.row.3.label': 'Shunchaki o\u2019rgatmaydi \u2014 joriy qiladi',
      'compare.row.3.rop': 'Boshqaradi',
      'compare.row.3.trainer': 'O\u2019rgatadi',
      'compare.row.3.consult': 'Hisobot yozadi',
      'compare.row.3.us': 'Jarayonni joriy qiladi',
      'compare.row.4.label': 'Joriy qilingandan keyin qoladi',
      'compare.row.4.rop': '\u2014',
      'compare.row.4.trainer': '\u2014',
      'compare.row.4.consult': '\u2014',
      'compare.row.4.us': '30\u201340 kun hamrohlik',
      'compare.row.5.label': 'Voronka raqamlari uchun javobgar',
      'compare.row.5.rop': 'Ichkaridan',
      'compare.row.5.trainer': '\u2014',
      'compare.row.5.consult': '\u2014',
      'compare.row.5.us': 'O\u2019lchovli natija',
      'compare.closer': 'Agar sizda kuchli savdo rahbari bo\u2019lsa \u2014 men uni almashtirmayman, kuchaytiraman. Vazifam \u2014 ketganimdan keyin tizimingiz mensiz ishlashi.',

      'about.eyebrow': 'Diagnostikani kim olib boradi',
      'about.title': 'Savdoda 10+ yil. Ixtisoslashuv: ko\u2019chmas mulk va murakkab bitimlar.',
      'about.photo': '[muallif surati]',
      'about.p1': 'Savdoda 10+ yil \u2014 menejerdan bo\u2019lim rahbarigacha. Yevropa, Dubay va Balidagi jamoalar va mijozlar bilan ishlaganman. Qattiq raqobat sharoitida premium qanday sotilishini ko\u2019rganman \u2014 va bu usullarni har chorakda raqobat o\u2019sib borayotgan mintaqaviy ko\u2019chmas mulk sohasiga olib kelaman.',
      'about.p2': 'Ko\u2019chmas mulk sohasiga ongli ravishda keldim. Bu yerda o\u2019rtacha chek yuqori, savdo sikli esa uzun \u2014 menejerning har bir xatosi quruvchiga o\u2019n minglab, hatto yuz minglab dollar yo\u2019qotilgan marjaga tushadi. Va bu xatolar deyarli doim tizimli, \u00AByomon sotuvchi tushdi\u00BB emas.',
      'about.quote': 'Men tasodifiy savdo o\u2019sishiga ishonmayman. Tizimga ishonaman: skript, nazorat va boshqariladigan ko\u2019rsatkichlar. Kompaniyangizdagi eng yaxshi menejer \u2014 bu siz ishga olgan kishi emas. Bu siz o\u2019qitgan va qanday boshqarishni biladigan kishi.',
      'about.signature': '\u2014 keepthinKING Sales Development Group asoschisi',

      'faq.eyebrow': 'Halol javoblar',
      'faq.title': 'Rozilik bildirishdan oldin odatda nima so\u2019raydilar',
      'faq.1.q': 'Bu biz uchun qimmat',
      'faq.1.a': 'Mahsulotingizning o\u2019rtacha chekida bajarilmagan bitta bitim \u2014 o\u2019n minglab, hatto yuz minglab dollar yo\u2019qotilgan marja. Joriy etish oyiga bitta qo\u2019shimcha bitimdan boshlab o\u2019zini oqlaydi \u2014 odatda dastlabki 30 kunda. Aniq iqtisodni raqamlaringizga moslab diagnostikada hisoblaymiz \u2014 bepul.',
      'faq.2.q': 'Qancha vaqtda o\u2019zini oqlaydi?',
      'faq.2.a': 'O\u2019rtacha \u2014 joriy etilganidan keyin birinchi oyda. Ko\u2019chmas mulk sohasida bitta qo\u2019shimcha bitim loyiha narxini bir necha barobar qoplaydi. Shundan so\u2019ng har bir keyingi bitim \u2014 ilgari voronkada yo\u2019qotayotgan narsalaringizdan toza foyda.',
      'faq.3.q': 'Bizning o\u2019z xususiyatimiz bor \u2014 mintaqa, mahsulot, mijozlar',
      'faq.3.a': 'Har bir quruvchida o\u2019z xususiyatlari bor. Ammo \u00ABnarxni erta aytish\u00BB va \u00ABfollow-up qilmaslik\u00BB muammolari \u2014 universal. Men tayyor shablon olib kelmayman. Men sizning qo\u2019ng\u2019iroqlaringizni tinglash va eshitgan narsam bilan ishlash uchun kelaman.',
      'faq.4.q': 'Biz ilgari konsultantlar bilan sinab ko\u2019rganmiz \u2014 yordam bermagan',
      'faq.4.a': 'Ko\u2019pchilik konsultantlar tavsiyalar taqdimotidan keyin darhol ketadi. Men joriy etilganidan keyin 30\u201340 kun qolaman va voronka raqamlari haqiqatan siljishi uchun javobgarman. Agar siljimasa \u2014 bu mening muammom, sizniki emas.',
      'faq.5.q': 'Bizda allaqachon savdo rahbari bor',
      'faq.5.a': 'Yaxshi. Kuchli savdo rahbari \u2014 sizning aktivingiz. Ammo tizim ichidagi savdo rahbari uni tashqaridan ko\u2019rmaydi. Vazifam \u2014 unga vositalar va yangi qarash berish. Ketganimdan keyin sizning savdo rahbaringiz ishlaydi, men emas.',
      'faq.6.q': 'Bu pullarni reklamaga qo\u2019yish afzalroq',
      'faq.6.a': 'Reklama lidlarni olib keladi. Agar konversiya o\u2019smasa \u2014 siz ikki marta to\u2019laysiz: lid uchun va uning sotib olmagani uchun. Konversiyaning 3%dan 5%ga o\u2019sishi = +66% bitim byudjetni oshirmasdan. Reklama va savdo tizimi \u2014 bu \u00AByo u, yo bu\u00BB emas, bu ketma-ketlik: avval bochka tuzatiladi, keyin suv quyiladi.',
      'faq.7.q': 'Bu mening jamoamdan qancha vaqt oladi?',
      'faq.7.a': 'Menejerlar: tahlillar uchun haftasiga 2\u20133 soat. Savdo rahbari: nazorat uchun haftasiga ~5 soat. Hozir \u00ABnima uchun mijoz sotib olmadi\u00BB ni muhokama qilishga sarflayotgan vaqtdan kamroq.',

      'final.title': 'Bitimlaringiz aniq qayerda yo\u2019qotayotganini bilib oling',
      'final.lead': '40 daqiqa. Bepul. Yozma hisobot va reja bilan.<br>Sotuv qo\u2019ng\u2019irog\u2019i emas \u2014 audit.',
      'final.filter': 'Savdo bo\u2019limini rivojlantirishga sarmoya kiritishga va o\u2019zgarishlarni tizimli joriy etishga tayyor kompaniyalar bilan ishlayman. Bir martalik maslahatlar uchun emas.',

      'form.name.label': 'Ism',
      'form.name.placeholder': 'Sizga qanday murojaat qilaman',
      'form.phone.label': 'Telefon',
      'form.phone.placeholder': '+___',
      'form.company.label': 'Kompaniya / loyiha nomi',
      'form.company.placeholder': 'Guruh yoki loyiha',
      'form.role.label': 'Lavozim',
      'form.role.placeholder': 'Tanlang',
      'form.role.owner': 'Egasi',
      'form.role.commercial': 'Tijorat direktori',
      'form.role.saleshead': 'Savdo rahbari / Savdo direktori',
      'form.role.other': 'Boshqa',
      'form.submit': 'Diagnostikaga yozilish',
      'form.note': 'Ish kuni davomida shaxsan javob beraman \u00B7 oyiga 5 tagacha kompaniya',

      'tg.title': 'Voronkangizni 40 daqiqada tahlil qilamiz',
      'tg.sub': 'Qayerda bitimlarni yo\u2019qotayotganingizni va dastlabki 30 kunda nimani tuzatish kerakligini ko\u2019rsataman',
      'tg.btn': 'Telegram\u2019da yozish',
      'tg.note': '15\u201330 daqiqa ichida javob beraman',

      'footer.tagline': 'Murakkab bitimlar uchun tizimli savdolar',
      'footer.telegram': 'Telegram',
      'footer.email': 'Email',
      'footer.copyright': '\u00A9 2026',
    },
  };

  const SUPPORTED_LANGS = ['ru', 'en', 'uz'];
  const DEFAULT_LANG = 'ru';
  const STORAGE_KEY = 'ktk-sdg-lang';

  function getInitialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGS.indexOf(saved) !== -1) return saved;
    } catch (_) { /* noop */ }
    return DEFAULT_LANG;
  }

  function applyTextNodes(dict) {
    const textNodes = document.querySelectorAll('[data-i18n]');
    for (let i = 0; i < textNodes.length; i++) {
      const el = textNodes[i];
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (typeof val === 'string') el.textContent = val;
    }
  }

  function applyHtmlNodes(dict) {
    const htmlNodes = document.querySelectorAll('[data-i18n-html]');
    for (let i = 0; i < htmlNodes.length; i++) {
      const el = htmlNodes[i];
      const key = el.getAttribute('data-i18n-html');
      const val = dict[key];
      if (typeof val === 'string') el.innerHTML = val;
    }
  }

  function applyAttrNodes(dict) {
    const attrNodes = document.querySelectorAll('[data-i18n-attr]');
    for (let i = 0; i < attrNodes.length; i++) {
      const el = attrNodes[i];
      const attrName = el.getAttribute('data-i18n-attr');
      if (!attrName) continue;
      const keyAttr = 'data-i18n-' + attrName;
      const key = el.getAttribute(keyAttr);
      if (!key) continue;
      const val = dict[key];
      if (typeof val === 'string') el.setAttribute(attrName, val);
    }
  }

  function recalcOpenFaq() {
    const openItems = document.querySelectorAll('.faq__item.is-open');
    for (let i = 0; i < openItems.length; i++) {
      const answer = openItems[i].querySelector('.faq__a');
      if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  }

  function updateSwitcherState(lang) {
    const btns = document.querySelectorAll('.lang-switch__btn');
    for (let i = 0; i < btns.length; i++) {
      const b = btns[i];
      if (b.getAttribute('data-lang') === lang) {
        b.classList.add('is-active');
        b.setAttribute('aria-current', 'true');
      } else {
        b.classList.remove('is-active');
        b.removeAttribute('aria-current');
      }
    }
  }

  function setLanguage(lang) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) lang = DEFAULT_LANG;
    const dict = translations[lang];
    if (!dict) return;

    applyTextNodes(dict);
    applyHtmlNodes(dict);
    applyAttrNodes(dict);

    if (typeof dict['meta.title'] === 'string') document.title = dict['meta.title'];
    document.documentElement.setAttribute('lang', lang);

    updateSwitcherState(lang);
    recalcOpenFaq();

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* noop */ }
  }

  /* ----------------------------------------------------
     Nav background on scroll
     ---------------------------------------------------- */
  const nav = document.getElementById('nav');
  const SCROLL_THRESHOLD = 40;

  function updateNav() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  if (nav) {
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  /* ----------------------------------------------------
     FAQ accordion
     ---------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(function (item) {
    const button = item.querySelector('.faq__q');
    const answer = item.querySelector('.faq__a');
    if (!button || !answer) return;

    button.addEventListener('click', function () {
      const isOpen = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : '0';
    });
  });

  /* ----------------------------------------------------
     Smooth scroll for anchor links (with nav offset)
     ---------------------------------------------------- */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const navHeight = nav ? nav.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ----------------------------------------------------
     Language switcher — bind + init
     ---------------------------------------------------- */
  const langButtons = document.querySelectorAll('.lang-switch__btn');
  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const lang = btn.getAttribute('data-lang');
      if (lang) setLanguage(lang);
    });
  });

  setLanguage(getInitialLang());

  /* ----------------------------------------------------
     Telegram CTA handler
     ---------------------------------------------------- */
  var TG_MESSAGES = {
    'ru': 'Здравствуйте, хочу записаться на диагностику отдела продаж',
    'en': 'Hello, I would like to book a sales department diagnostic',
    'uz': 'Salom, savdo bo\'limi diagnostikasiga yozilmoqchiman'
  };

  document.addEventListener('click', function (event) {
    var btn = event.target.closest('[data-cta="telegram"]');
    if (!btn) return;
    event.preventDefault();
    var lang = document.documentElement.lang || 'ru';
    var text = TG_MESSAGES[lang] || TG_MESSAGES['ru'];
    window.open('https://t.me/keepthinK1NG?text=' + encodeURIComponent(text), '_blank', 'noopener');
  });
})();
