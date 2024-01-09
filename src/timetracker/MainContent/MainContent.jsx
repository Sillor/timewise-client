import NewEntryForm from "./NewEntryForm";
function MainContent() {
  return (
    <section className="w-full flex justify-center">
      <div className="md:w-main-content w-full flex flex-col items-center p-2">
        <h1 className="text-5xl font-bold mt-10 mb-10">Time Tracker</h1>
        <NewEntryForm />
      </div>
    </section>
  );
}
export default MainContent;
