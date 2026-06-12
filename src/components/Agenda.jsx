export function Agenda({ days }) {
  return (
    <div className="mt-4 grid gap-5 lg:grid-cols-2 lg:gap-6">
      {days.map((day) => (
        <section className="agenda-day" key={day.date}>
          <div>
            <p>{day.date}</p>
          </div>
          <div className="mt-3 grid gap-3">
            {day.items.map((item) => {
              const isPause = ['Corte', 'Receso · tarde libre'].includes(item.title)

              return (
                <div
                  className={`agenda-row${isPause ? ' agenda-row-pause' : ''}`}
                  key={`${day.date}-${item.time}-${item.title}`}
                >
                  <span>{item.time}</span>
                  <div>
                    <h4>{item.title}</h4>
                    {item.description ? <p>{item.description}</p> : null}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
