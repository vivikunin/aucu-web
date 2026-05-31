export function Agenda({ days }) {
  return (
    <div className="mt-5 grid gap-6 lg:grid-cols-2 lg:gap-8">
      {days.map((day) => (
        <section className="agenda-day" key={day.date}>
          <div>
            <p>{day.date}</p>
          </div>
          <div className="mt-4 grid gap-4">
            {day.items.map((item) => (
              <div className="agenda-row" key={`${day.date}-${item.time}-${item.title}`}>
                <span>{item.time}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
