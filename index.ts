import { buildOptimizer } from '@angular-devkit/build-optimizer'

export default function optimizer() {
  return {
    name: 'angular-optimizer',
    transform: (content) => buildOptimizer({ content }).content,
  }
}

