export default function Page({ params }: { params: { id: string } }) {
  return <h1>Hello from feedback {params.id}</h1>;
}
