export default function HomePage() {
    return (
        <div className="flex items-center gap-3 m-10">
            <div className="text-5xl text-Jost  z-10">
                «Виноделие - это длинный процесс, в котором ты постоянно видишь
                и чувствуешь изменения. Это и есть жизнь»
            </div>
            <video
                className=""
                height={400}
                width={1000}
                controls
                src="/home.mp4"
            />
        </div>
    );
}
