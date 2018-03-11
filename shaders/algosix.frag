
void main() {
    
	vec2 uv = (gl_FragCoord.xy / resolution.xy );
    
	gl_FragColor = vec4(0.2, 0.1, 0.1, 1.0);
}