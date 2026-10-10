export function Agenda({ days, locations }) {
  return (
    <div className="mt-4 grid gap-5 lg:grid-cols-2 lg:gap-6">
      {days.map((day, index) => (
        <section className="agenda-day" key={day.date}>
          <div>
            <p className="agenda-date">{day.date}</p>
            <p className="agenda-location">
              {locations[index].venue} · {locations[index].address}
            </p>
          </div>
          <div className="mt-3 grid gap-3">
            {day.items.map((item) => {
              const isPause = ['Corte', 'Receso · tarde libre'].includes(item.title)
              const descriptionItems = item.description
                ? item.description.split(' · ').filter(Boolean)
                : []

              return (
                <div
                  className={`agenda-row${isPause ? ' agenda-row-pause' : ''}`}
                  key={`${day.date}-${item.time}-${item.title}`}
                >
                  <span>{item.time}</span>
                  <div>
                    <h4>{item.title}</h4>
                    {descriptionItems.length > 0 ? (
                      <ul className="agenda-speakers">
                        {descriptionItems.map((descriptionItem) => (
                          <li key={descriptionItem}>{descriptionItem}</li>
                        ))}
                      </ul>
                    ) : null}
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
