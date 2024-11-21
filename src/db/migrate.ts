import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from "./index";

const main = async () => {
    try {
        await migrate(db, {
            migrationsFolder: 'src/db/migrations'
        })
        console.log('Migratuin cimoleted');
    } catch (err) { 
        console.error("Error during migratuin: ", err)
        process.exit(1);
    }
}
main();