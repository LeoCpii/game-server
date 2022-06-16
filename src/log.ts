function log() {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const result = await originalMethod.apply(this, args);

            if (['true'].includes(String(process.env.DEBUG))) {
                console.log('---> ', key);
            }

            return result;
        };
    };
}

export { log };
