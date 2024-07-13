export default function Form({ className }) {
  return(
    <form className={`p-5 md:p-6 xl:p-8 text-sm md:text-base rounded-md bg-[#F5F2F1] border border-red/10`}>
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 md:gap-y-5">
        <div className="col-span-2 lg:col-span-1">
          <p>
            <label
              htmlFor="name"
              className="block font-semibold mb-2 text-sm"
            >Name *</label>

            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Joe Bloggs"
              className="px-4 py-3 bg-white shadow-md shadow-black/5 rounded-md border border-black/10 placeholder:text-black/50 w-full outline-none focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5"
            />
          </p>
        </div>
        
        <div className="col-span-2 lg:col-span-1">
          <p>
            <label
              htmlFor="email"
              className="block font-semibold mb-2 text-sm"
            >Email *</label>

            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="example@email.com"
              className="px-4 py-3 bg-white shadow-md shadow-black/5 rounded-md border border-black/10 placeholder:text-black/50 w-full outline-none focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5"
            />
          </p>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p>
            <label
              htmlFor="tel"
              className="block font-semibold mb-2 text-sm"
            >Telephone</label>

            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="+44 123 456 789"
              className="px-4 py-3 bg-white shadow-md shadow-black/5 rounded-md border border-black/10 placeholder:text-black/50 w-full outline-none focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5"
            />
          </p>
        </div>
        
        <div className="col-span-2 lg:col-span-1">
          <p>
            <label
              htmlFor="org"
              className="block font-semibold mb-2 text-sm"
            >Organisation</label>

            <input
              type="text"
              id="org"
              name="org"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="+44 123 456 789"
              className="px-4 py-3 bg-white shadow-md shadow-black/5 rounded-md border border-black/10 placeholder:text-black/50 w-full outline-none focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5"
            />
          </p>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p>
            <label
              htmlFor="course"
              className="block font-semibold mb-2 text-sm"
            >Which course are you interested in?</label>

            <select id="course" name="course" className="px-4 py-3 bg-white shadow-md shadow-black/5 rounded-md border border-black/10 placeholder:text-black/50 w-full outline-none focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5">
              <option value="none">Not Applicable</option>
              <option value="any">Any</option>
              <option value="simulationTraining">Simulation Training</option>
              <option value="seminarTrainingWithVideo">Seminar Training with Video</option>
              <option value="interactiveWebinar">Interactive Webinar</option>
            </select>
          </p>
        </div>

        <div className="col-span-2">
          <p>
            <label
              htmlFor="message"
              className="block font-semibold mb-2 text-sm"
            >Message</label>

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Please let us know any further details..."
              className="px-4 py-3 bg-white shadow-md shadow-black/5 rounded-md border border-black/10 placeholder:text-black/50 w-full outline-none focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5"
            />
          </p>
        </div>

        <div className="col-span-1">
          <button type="submit" className="bg-red hover:bg-black text-white inline-block shadow-md text-center px-3 md:px-4 xl:px-5 py-2 text-sm md:text-base rounded-md font-semibold outline-none focus-visible:outline-red focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-offset-5">Send Enquiry</button>
        </div>
        
        <div className="col-span-1 text-black/50 text-right self-end">
          <small>* Required fields</small>
        </div>
      </div>
    </form>
  )
}