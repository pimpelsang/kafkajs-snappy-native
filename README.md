# kafkajs-snappy-native
Snappy c++ native codec for KafkaJS. For javascript only implementation use [kafkajs-snappy](https://github.com/tulios/kafkajs-snappy)

## Installation

```sh
npm install kafkajs-snappy-native
# yarn add kafkajs-snappy-native
```

## Configuration

```javascript
const {  CompressionTypes, CompressionCodecs } = require('kafkajs')
const SnappyCodec = require('kafkajs-snappy-native')

CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec
```

## License

See [LICENSE](https://github.com/tulios/kafkajs/blob/master/LICENSE) for more details.
