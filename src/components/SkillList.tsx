function splitSkills<T extends readonly string[]>(
  skills: T,
): [T[number][], T[number][]] {
  const mid = Math.ceil(skills.length / 2);
  return [skills.slice(0, mid) as T[number][], skills.slice(mid) as T[number][]];
}

function SkillItems({
  skills,
  soft,
}: {
  skills: readonly string[];
  soft?: boolean;
}) {
  const textSize = soft ? "text-[18px] md:text-2xl" : "text-xl md:text-2xl";

  return (
    <>
      {skills.map((skill) => (
        <span key={skill}>
          <h4 className={`my-4 ${textSize} font-bold text-[#212529]`}>
            <i className="text-[#616c5c] bi bi-check-lg mr-2" />
            {skill}
          </h4>
          <hr className="my-2" />
        </span>
      ))}
    </>
  );
}

export function SkillList({
  skills,
  soft,
}: {
  skills: readonly string[];
  soft?: boolean;
}) {
  const [left, right] = splitSkills(skills);

  return (
    <div className="w-full flex flex-wrap justify-between">
      <div className="w-[50%] md:w-[40%] lg:w-[50%] xl:w-[40%] lg:mx-0 lg:px-1">
        <SkillItems skills={left} soft={soft} />
      </div>
      <div className="w-[50%] md:w-[40%] lg:w-[50%] xl:w-[40%] xl:mx-3 lg:px-1">
        <SkillItems skills={right} soft={soft} />
      </div>
    </div>
  );
}