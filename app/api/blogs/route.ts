import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient, createAdminClient } from '@/lib/supabase/server';

// GET all blogs
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const published = searchParams.get('published');
  const limit = searchParams.get('limit');
  const category = searchParams.get('category');

  const supabase = createAdminClient();

  let query = supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  if (published === 'true') {
    query = query.eq('is_published', true);
  }

  if (category) {
    query = query.eq('category', category);
  }

  if (limit) {
    query = query.limit(parseInt(limit));
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST create new blog
export async function POST(request: NextRequest) {
  const supabase = await createServerSupabaseClient();
  
  // Check authentication
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const adminClient = createAdminClient();

  const { data, error } = await adminClient
    .from('blogs')
    .insert([{
      ...body,
      updated_at: new Date().toISOString(),
    }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}