function SkillsList({ src, skills }) {
    return (
        <span>
            <img
                src={src}
                alt="CheckMark Icon"
            />
            <p>{skills}</p>
        </span>
    );
}

export default SkillsList;
