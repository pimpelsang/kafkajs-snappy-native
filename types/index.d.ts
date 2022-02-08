interface Encoder {
    buffer: Buffer
}

interface Snappy {
    compress: (encoder: Encoder) => Promise<Buffer>;
    decompress: (compressed: Buffer) => Promise<Buffer>;
}

declare function snappyConstructor(): Snappy;

export = snappyConstructor
