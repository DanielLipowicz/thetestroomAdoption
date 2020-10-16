import theTestRoom from "./env/theTestRoom";

class EnvConfig {
    getEnvConfig(environment) {
        const config = {
            theTestRoom
        }
        return config[environment]
    }
}
export default new EnvConfig();

