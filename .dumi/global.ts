/**
 * 添加代码高亮
 */
import { Prism } from 'prism-react-renderer';
((typeof global !== 'undefined' ? global : window) as any).Prism = Prism;

require('prismjs/components/prism-glsl');
