import fs from 'fs';
import path from 'path';
import Navbar from '@/components/navbar-branch';

const splitIntoChunks = (array, chunkCount) => {
    const chunks = Array.from({ length: chunkCount }, () => []);
    array.forEach((item, index) => {
        chunks[index % chunkCount].push(item);
    });
    return chunks;
};

export default async function ProjectPage({ params }) {
    const { folder } = params;

    const folderPath = path.join(process.cwd(), 'public', 'img', 'projects', folder);

    let files = [];

    if (fs.existsSync(folderPath)) {
        files = fs.readdirSync(folderPath).filter((file) =>
            /\.(png|jpg|jpeg|gif|webp|svg)$/.test(file)
        );
    }

    const chunkedFiles = splitIntoChunks(files, 4);

    return (
        <>
            <Navbar />
            <div className="grid grid-cols-2 items-start md:grid-cols-4 gap-4 p-4 min-h-screen">
                {chunkedFiles.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="grid gap-4">
                        {chunk.map((file, index) => (
                            <div key={index} className="relative group">
                                <img
                                    className="h-auto max-w-full rounded-lg"
                                    src={`/img/projects/${folder}/${file}`}
                                    alt={`Image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}