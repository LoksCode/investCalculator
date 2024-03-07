export default function UserInput({ onChange }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>
          <input
            type='number'
            onChange={(event) => onChange('initInvest', event.target.value)}
            defaultValue={0}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type='number'
            defaultValue={0}
            onChange={(event) => onChange('annualInvest', event.target.value)}
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type='number'
            defaultValue={0}
            onChange={(event) => onChange('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type='number'
            min='1'
            defaultValue={0}
            onChange={(event) => onChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
